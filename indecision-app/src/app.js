console.log('Indecision App is Running');

const app = { 
	title : 'Indecision App',
	subtitle : 'Let someone else make the decisions',
	options : ['one', 'two']
};

const onFormSubmit = (e) => {
	e.preventDefault();
	
	console.log("form submitted!");

	const option = e.target.elements.option.value;

	if(option) {
		app.options.push(option);
		e.target.elements.option.value = '';
	}

	countRender();
}

const removeOptions = () => {
	app.options = [];
	countRender();
}

const countRender = () => {
	const template = (
		<div>
			<h1>{app.title}</h1>
			<p>{app.subtitle}</p>
			<p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
			<p>{app.options.length}</p>
			<button onClick={removeOptions}>Remove Options</button>
			<ol>
				{app.options.map((opt) => {
					return <li key={opt}>{opt}</li>
				})}
			</ol>
			<form onSubmit={onFormSubmit}>
				<input type="text" name="option"></input>
				<button>Add Option</button>
			</form>
		</div>	
	);

	ReactDOM.render(template, appRoot);	
};

var appRoot = document.getElementById('app');
countRender();

