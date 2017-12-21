'use strict';

console.log('Indecision App is Running');

var info = {
	appName: 'Indecision App',
	appDesc: 'Picking what to do',
	appAuth: 'Jordy',
	appV: 1
};

function getDesc(description) {
	if (description) {
		return React.createElement(
			'p',
			null,
			description
		);
	}
}

var template = React.createElement(
	'div',
	null,
	React.createElement(
		'h1',
		null,
		info.appName ? info.appName : "Anonymous"
	),
	React.createElement(
		'p',
		null,
		'App Author: ',
		info.appAuth
	),
	getDesc(info.appDesc),
	info.appV >= 0 && React.createElement(
		'p',
		null,
		'App Version: ',
		info.appV
	)
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
