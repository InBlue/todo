import { useState, useEffect } from 'react';

import '../assets/scss/home.scss';
import TodoItem from '../components/todoItem';
import usePersistedState from '../util/usePersistedState.js';

export default function Home() {
	const [itemText, setItemText] = useState("");
	const [items, setItems] = usePersistedState('todo-items', []); // Using the custom localStorage handler

	const [incompleteItems, setIncompleteItems] = useState([]);
	const [completeItems, setCompleteItems] = useState([]);

	useEffect(() => {
		/*
			This will iterate over each of the items in the localStorage, 'todo-items' array.
			Adding the object to the incomplete or complete items state depending on their
			'completed' value in the object.
		*/
		items.forEach(item => {
			if(!item.complete) return setIncompleteItems(oldIncompleteItems => [...oldIncompleteItems, item]);
			if(item.complete) return setCompleteItems(oldCompleteItems => [...oldCompleteItems, item]);
		});
		return () => {
			/*
				These will clear the two states so that they don't duplicate old entries when new ones are added.
			*/
			setIncompleteItems([]);
			setCompleteItems([]);
		}
	}, [items]); // 'items' is in the dependency array so that each time it updates the above code is executed

	const addItem = () => {
		const item = {
			text: itemText, // 
			complete: false, // Default all tasks to default
			id: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15) // Randomly generate a string of text to create an ID
		}
		setItems(oldItems => [...oldItems, item]); // Using spread syntax to add a new object to the items array 
		document.getElementById("todo-input").value = ""; // Will clear the input field when the 'Add' button is pressed
	}

	const toggleComplete = (id) => {
		const oldItems = items;
		const updatedItems = oldItems.filter(item => item.id !== id);
		const item = oldItems.filter(item => item.id === id);
		item[0].complete = !item[0].complete;
		setItems(updatedItems);
		setItems(oldItems => [...oldItems, item[0]]);
	}

	const removeItem = (id) => {
		const oldItems = items;
		const updatedItems = oldItems.filter(item => item.id !== id); // Create a temporary array without the specified item id
		setItems(updatedItems); // Set the items in the localStorage array to an array without the specified id
	}

	return (
		<div id="home"> {/* React requires all components to be surrounded by a parent element */}
			<div id="todo">
				<div id="todo-header"> {/* I like to add prefixes to my class names and ids when using react. This is because when compiled, the stylesheets are combined and it is easy to confuse which style to apply. */}
					<h1 id="todo-title">todo.</h1>
					<div id="todo-new">
						<input id="todo-input" type="text" name="todo-item" onChange={(e) => setItemText(e.target.value.toString().trim())} />
						<p id="todo-add" onClick={() => addItem()}>Add</p>
					</div>
				</div>
				<div id="todo-tasks">
					{incompleteItems.length >= 1 ?
						<div id="todo-incomplete">
							<h3 className="todo-tasks-title">Incomplete Tasks</h3>
							{incompleteItems.map((item, i) => (
								<TodoItem key={i} id={item.id} name={item.text} completed={item.complete} toggle={toggleComplete} remove={removeItem} />
							))}
						</div>
					: '' }
					{completeItems.length >= 1 ?
						<div id="todo-complete">
							<h3 className="todo-tasks-title">Completed Tasks</h3>
							{completeItems.map((item, i) => (
								<TodoItem key={i} id={item.id} name={item.text} completed={item.complete} toggle={toggleComplete} remove={removeItem} />
							))}
						</div>
					: ''}
				</div>
			</div>
    	</div>
  	);
}
