class IndecisionApp extends React.Component {
	render() {

		const title = 'Indecision';
		const subtitle = 'Let me decide for you'
		const options = ['Thing one', 'Thing two', 'Thing four'];

		return (
			<div>
				<Header title={title} subtitle={subtitle}/>
				<Action />
				<Options options={options}/>
				<AddOption />
			</div>
		);
	}
}

class Header extends React.Component {
	render() {
		return (
			<div>
				<h1>{this.props.title}</h1>
				<h2>{this.props.subtitle}</h2>
			</div>
		);
	}
}

class Action extends React.Component {

	onActionClick() {
		alert("Clicked!");
	}

	render() {
		return (
			<div>
				<button onClick={this.onActionClick}>What Should I Do?</button>
			</div>
		);
	}
}

class Options extends React.Component {
	constructor(props) {
		super(props);
		this.onRemoveAll = this.onRemoveAll.bind(this);
	}

	onRemoveAll() {
		console.log(this.props.options);
	}

	render() {
		return (
			<div>
				<button onClick={this.onRemoveAll}>Remove All</button>
				{
					this.props.options.map((opt) => {
						return <Option key={opt} optionText={opt}/>
					})
				}
			</div>
		);
	}
}

class Option extends React.Component {
	render() {
		return (
			<div>
				{this.props.optionText}
			</div>
		);
	}
}

class AddOption extends React.Component {
	onFormSubmit(e) {
		e.preventDefault();
		const option = e.target.elements.option.value.trim();
		if(option) {
			alert(option);
			e.target.elements.option.value = ''
		}
	}

	render() {
		return (
			<div>
				<form onSubmit={this.onFormSubmit}>
					<input type="text" name="option"></input>
					<button>Add Option</button>
				</form>
			</div>
		);
	}
} 

ReactDOM.render(<IndecisionApp />, document.getElementById("app"));