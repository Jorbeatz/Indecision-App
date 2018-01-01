class Visible extends React.Component {

	constructor(props) {
		super(props);
		this.onToggle = this.onToggle.bind(this);
		this.state = {
			visibility: false
		}
	}

	onToggle() {
		this.setState((prevState) => {
			return {
				visibility: !prevState.visibility
			};
		});
	}

	render() {
		return (
			<div>
				<h1>Visibility Toggle</h1>	
				<button onClick={this.onToggle}>{this.state.visibility ? "Hide Details" : "Show Details"}</button>
				{this.state.visibility && (
					<div>
						<p>Lorem Ipsum Text </p>
					</div>
				)}
			</div>
			
		);
	};
}

ReactDOM.render(<Visible />, document.getElementById('app'));