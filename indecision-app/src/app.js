class IndecisionApp extends React.Component {
	constructor(props) {
		super(props);
		this.handleRemoveOptions = this.handleRemoveOptions.bind(this);
		this.handlePick = this.handlePick.bind(this);
		this.handleAddOption = this.handleAddOption.bind(this);
		this.handleRemoveOption = this.handleRemoveOption.bind(this);
		this.state = {
			options: props.options
		};
	}

	componentDidMount() {
		try {
			const json = localStorage.getItem('options');
			const options = JSON.parse(json);
			if(options) {
				this.setState(() => ({ options }));
			}
		} catch(e) {

		}
	}

	componentDidUpdate(prevProps, prevState) {
		if(this.state.options.length !== prevState.options.length) {
			const json = JSON.stringify(this.state.options);
			localStorage.setItem('options', json);
		}
	}

	handleRemoveOptions() {
		this.setState(() => ({ options: [] }));
	}

	handleRemoveOption(optionToRemove) {
		this.setState((prevState) => ({
			options: prevState.options.filter((option) => option !== optionToRemove)
		}));
	}

	handlePick() {
		const option = Math.floor(Math.random() * this.state.options.length);
		alert(this.state.options[option]);
	}

	handleAddOption(option) {
		if(!option) {
			return "Enter value to add item";

		} else if (this.state.options.indexOf(option) > -1) {
			return "option already exists";
		}

		this.setState((prevState) => ({ options: prevState.options.concat(option) }));
	}

	render() {
		const subtitle = 'Let me decide for you'
		return (
			<div>
				<Header 
					subtitle={subtitle}
				/>
				<Action 
					hasOptions={this.state.options.length > 0}
					handlePick={this.handlePick}
				/>
				<Options 
					options={this.state.options}
					handleRemoveOptions={this.handleRemoveOptions}
					handleRemoveOption={this.handleRemoveOption}
				/>
				<AddOption 
					handleAddOption={this.handleAddOption}
				/>
			</div>
		);
	}
}

IndecisionApp.defaultProps = {
	options: []
};

const Header = (props) => {
	return (
		<div>
			<h1>{props.title}</h1>
			{props.subtitle && <h2>{props.subtitle}</h2>}
		</div>
	);		
}

Header.defaultProps = {
	title: 'Indecision App'
};

const Action = (props) => {
	return (
		<div>
			<button 
				onClick={props.handlePick}
				disabled={!props.hasOptions}
			>
			What Should I Do?
			</button>
		</div>
	);		
}

const Options = (props) => {
	return (
		<div>
			<button onClick={props.handleRemoveOptions}>Remove All</button>
			{props.options.length === 0 && <p>Please add an option to get started!</p>}
			{props.options.map((option) => (
				<Option 
					optionText={option}
					key={option}
					removeOption={props.handleRemoveOption}
				/>
			))}
		</div>
	);
}

const Option = (props) => {
	return (
		<div>
			{props.optionText}
			<button onClick={(e) => {
				props.removeOption(props.optionText)
			}}
			>
				remove
			</button>
		</div>
	);
};

class AddOption extends React.Component {
	constructor(props) {
		super(props);
		this.handleAddOption = this.handleAddOption.bind(this);
		this.state = {
			error: undefined
		};
	}

	handleAddOption(e) {
		e.preventDefault();
		const option = e.target.elements.option.value.trim();
		const error = this.props.handleAddOption(option);

		this.setState(() => ({ error }))

		if(!error) {
			e.target.elements.option.value = '';	
		}
	}

	render() {
		return (
			<div>
				{this.state.error && <p>{this.state.error}</p>}
				<form onSubmit={this.handleAddOption}>
					<input type="text" name="option"></input>
					<button>Add Option</button>
				</form>
			</div>
		);
	}
} 

ReactDOM.render(<IndecisionApp options={['option 1', 'option 2']}/>, document.getElementById("app"));