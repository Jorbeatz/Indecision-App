import React from 'react';

import AddOption from './AddOption';
import Options from './Options';
import Header from './Header';
import Action from './Action';
import OptionModal from './OptionModal';

export default class IndecisionApp extends React.Component {

	state = {
		options: [],
		isSelected: undefined
	};

	handleRemoveOptions = () => {
		this.setState(() => ({ options: [] }));
	};

	handleRemoveOption = (optionToRemove) => {
		this.setState((prevState) => ({
			options: prevState.options.filter((option) => option !== optionToRemove)
		}));
	};

	handlePick = () => {
		const option = Math.floor(Math.random() * this.state.options.length);
		// alert(this.state.options[option]);
		this.setState(() => ({ isSelected: this.state.options[option] }))

	};

	handleAddOption = (option) => {
		if(!option) {
			return "Enter value to add item";

		} else if (this.state.options.indexOf(option) > -1) {
			return "option already exists";
		}

		this.setState((prevState) => ({ options: prevState.options.concat(option) }));
	};

	handleIsSelected = () => {
		this.setState((prevState) => ({ isSelected: undefined }));
	}

	componentDidMount = () => {
		try {
			const json = localStorage.getItem('options');
			const options = JSON.parse(json);
			if(options) {
				this.setState(() => ({ options }));
			}
		} catch(e) {

		}
	};

	componentDidUpdate = (prevProps, prevState) => {
		if(this.state.options.length !== prevState.options.length) {
			const json = JSON.stringify(this.state.options);
			localStorage.setItem('options', json);
		}
	};

	render() {
		const subtitle = 'Let me decide for you'
		return (
			<div>
				<Header 
					subtitle={subtitle}
				/>
				<div className="container">
					<Action 
						hasOptions={this.state.options.length > 0}
						handlePick={this.handlePick}
					/>
					<div className="widget">
						<Options 
							options={this.state.options}
							handleRemoveOptions={this.handleRemoveOptions}
							handleRemoveOption={this.handleRemoveOption}
						/>
						<AddOption 
							handleAddOption={this.handleAddOption}
						/>
					</div>
				</div>
				<OptionModal isSelected={this.state.isSelected} close={this.handleIsSelected}/>
			</div>
		);
	};
}

