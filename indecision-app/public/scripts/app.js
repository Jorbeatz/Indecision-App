'use strict';

console.log('Indecision App is Running');

var app = {
	title: 'Indecision App',
	subtitle: 'Let someone else make the decisions',
	options: ['one', 'two']
};

var onFormSubmit = function onFormSubmit(e) {
	e.preventDefault();

	console.log("form submitted!");

	var option = e.target.elements.option.value;

	if (option) {
		app.options.push(option);
		e.target.elements.option.value = '';
	}

	countRender();
};

var removeOptions = function removeOptions() {
	app.options = [];
	countRender();
};

var countRender = function countRender() {
	var template = React.createElement(
		'div',
		null,
		React.createElement(
			'h1',
			null,
			app.title
		),
		React.createElement(
			'p',
			null,
			app.subtitle
		),
		React.createElement(
			'p',
			null,
			app.options.length > 0 ? 'Here are your options' : 'No options'
		),
		React.createElement(
			'p',
			null,
			app.options.length
		),
		React.createElement(
			'button',
			{ onClick: removeOptions },
			'Remove Options'
		),
		React.createElement(
			'ol',
			null,
			app.options.map(function (opt) {
				return React.createElement(
					'li',
					{ key: opt },
					opt
				);
			})
		),
		React.createElement(
			'form',
			{ onSubmit: onFormSubmit },
			React.createElement('input', { type: 'text', name: 'option' }),
			React.createElement(
				'button',
				null,
				'Add Option'
			)
		)
	);

	ReactDOM.render(template, appRoot);
};

var appRoot = document.getElementById('app');
countRender();
