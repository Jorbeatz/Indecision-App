import React from 'react';

import Option from './Option';

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

export default Options;