console.log('Indecision App is Running');

var info = {
	appName: 'Indecision App',
	appDesc: 'Picking what to do',
	appAuth: 'Jordy',
	appV: 1
};

function getDesc(description) {
	if(description) {
		return <p>{description}</p>;
	}
}

var template = (
	<div>
		<h1>{info.appName ? info.appName : "Anonymous"}</h1>
		<p>App Author: {info.appAuth}</p>
		{getDesc(info.appDesc)}
		{(info.appV >= 0) &&  <p>App Version: {info.appV}</p>}
	</div>
);


var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);