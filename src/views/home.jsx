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
		items.forEach(item => {
			if(!item.complete) return setIncompleteItems(oldIncompleteItems => [...oldIncompleteItems, item]);
			if(item.complete) return setCompleteItems(oldCompleteItems => [...oldCompleteItems, item]);
		});
		return () => {
			setIncompleteItems([]);
			setCompleteItems([]);
		}
	}, [items]);

	const addItem = () => {
		const item = {
			text: itemText,
			complete: false,
			id: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
		}
		setItems(oldItems => [...oldItems, item]);
	}

	const toggleComplete = (id) => {
		const oldItems = items;
		const updatedItems = oldItems.filter(item => item.id !== id);
		const item = oldItems.filter(item => item.id === id);
		item[0].complete = !item[0].complete;
		setItems(updatedItems);
		setItems(oldItems => [...oldItems, item[0]]);
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
					<div id="todo-incomplete">
						{incompleteItems.length >= 1 ? <h3 className="todo-tasks-title">Incomplete Tasks</h3> : ''}
						{incompleteItems.map((item, i) => (
							<TodoItem key={i} id={item.id} name={item.text} toggle={toggleComplete} />
						))}
					</div>
					<div id="todo-complete">
						{completeItems.length >= 1 ? <h3 className="todo-tasks-title">Completed Tasks</h3> : ''}
						{completeItems.map((item, i) => (
							<TodoItem key={i} id={item.id} name={item.text} toggle={toggleComplete} />
						))}
					</div>
				</div>
			</div>
    	</div>
  	);
}
