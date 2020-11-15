import '../assets/scss/home.scss';

export default function Home() {
	return (
		<div id="home"> {/* React requires all components to be surrounded by a parent element */}
    		<div id="todo-header"> {/* I like to add prefixes to my class names and ids when using react. This is because when compiled, the stylesheets are combined and it is easy to confuse which style to apply. */}
				<h1 id="todo-title">todo.</h1>
				<input id="todo-add" type="text" name="todo-item" />
      		</div>
    	</div>
  	);
}