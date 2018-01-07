import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
	<Modal
		isOpen={!!props.isSelected}
		contentLabel="Test"
		ariaHideApp={false}
		onRequestClose={props.close}
	>
		<h3>Test</h3>
		{props.isSelected && <p>{props.isSelected}</p>}
		<button onClick={props.close}>Okay</button>
	</Modal>
);

export default OptionModal;