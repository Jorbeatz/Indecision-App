var appRoot = document.getElementById('app');

let text = "Lorem Ipsum Text";
let bool = false;

const onShowText = () => {
	if(bool === false) {
		bool = true;
		render();	
	} else {
		bool = false;
		render();
	}
	
}

const render = () => {

	const template = (
		<div>
			<h1>Visibility Toggle</h1>
			<button onClick={onShowText}>Show Details</button>
			{bool === true ? <p>{text}</p> : ""}
		</div>
	);

	ReactDOM.render(template, appRoot);
};

render();