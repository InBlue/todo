import '../assets/scss/home.scss';

export default function Home() {
	return (
		<div id="home"> {/* React requires all components to be surrounded by a parent element */}
    		<div id="todo-header"> {/* I like to add prefixes to my class names and ids when using react. This is because when compiled, the stylesheets are combined and it is easy to confuse which style to apply. */}
				<h1 id="todo-title">todo.</h1>
				<div id="todo-new">
					<input id="todo-input" type="text" name="todo-item" />
					<p id="todo-add">Add</p>
				</div>
      		</div>
				<div id="todo-tasks">
					<div id="todo-incomplete">
						<h3 className="todo-tasks-title">Incomplete Tasks</h3>
						<TodoItem name="Make todo list" />
					</div>
					<div id="todo-complete">
						<h3 className="todo-tasks-title">Completed Tasks</h3>
					</div>
				</div>
			</div>
    	</div>
  	);
}
