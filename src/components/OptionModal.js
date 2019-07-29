import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
	<Modal
		isOpen={!!props.isSelected}
		contentLabel="Selected Option"
		closeTimeoutMS={200}
		ariaHideApp={false}
		onRequestClose={props.close}
		className="modal"
	>
		<h3 className="modal__title">Selected Option</h3>
		{props.isSelected && <p className="modal__body">{props.isSelected}</p>}
		<button className="button" onClick={props.close}>Okay</button>
	</Modal>
);

export default OptionModal;