# React Notes

## Live Server
*	Barebones, easy, beginner server. Will use this for now but in the future move to Express and Webpack dev servers

``` live-server myFolder/ ```

## CDN React
*	Going to just use a CDN for react now because we're just starting off. Will switch at some later point.
* 	There's react native for apps, react vr for vr and react dom for browser

## JSX
*	JavaScript XML
*	var foo can be set to any type

## Babel
*	JS compiler, used to compile JSX to normal JS

## Yarn init
*	We use yarn init to make the initial package.json file with information on it

### Node Modules
*	Will never need these files. They're all the files related to the dependencies that you installed that they need. This is their dependencies, package files, etc.

## Yarn.lock file
*	Just gives you more information about your dependencies to help you check that your dependencies are right. It will change automatically.

## App.js
*	App.js in the root is going to contain the JSX that we write ourselves. App.js in the scripts folder is going to contain the output of the compiled JSX through Babel.

## Compiling with Babel command
*	babel {source file} --out-file={output file} --presets=env,react --watch
*	Watch is just used for hot reloading of the JSX
*	Actual command

``` npx babel src/app.js --out-file=public/scripts/app.js -w --presents=env,react ```

## Variable object
*	In JS, we can define objects with curly braces as a var with key-value pairs

## AND Operator
*	Apparently its just not your usual && but if the left of the ampersand is true, the contents of the right are rendered

## Var based variables
*	Can be reassigned and redefined with can cause issues

## Let variables
*	These can be reassigned but not redefined

## Const variables
*	Neither can be done

## Advice
*	Start everything with const. If it needs to be reassigned, switch it to let. Never use Var.

## Ternary Example
*	{app.options.length > 0 ? "Here are options" : "No options"}

## Arrow Function Example
*	Cannot name arrow functions into a const
*	Example

```
const square = (x) => {
	return x*x;	
};
```

## Arrow Function Expression Syntax
*	You don't have to explicitly call a return nor wrap in curly brace

## Arguments
*	When making a function in ES6, you can call arguments which returns your arguments even if they are not used.
*	This is not available in arrow syntax

## This
*	Not available in arrow function either

## User objects
*	Aside from key-value pairs, you can assign functions as well and call inner variables with this

## Arrays For Each
*	forEach
*	forEach takes a function that will be called for each option

## Scope
*	Can't call this to functions within the forEach. Not within scope of the user object.

## Arrow Function in object
*	Just dont use the function keyword

## Array Map Method
*	Unlike the foreach method the map method actually transforms each option in the array and returns a new array back
*	this.example.map((test) => test * this.num);

## Calling onClick
*	You can call an onClick on a arrow function but don't have to include the parenthesis just the curly braces

## React Re-rendering
*	React only re-renders that which was changed

## React Forms
*	Having just a template and form with a button adds the value to the address

## React Docs events
*	On their documentation page, they have a page with supported events including keyboard events, mouse events, etc.
*	For forms, we have onSubmit
*	React e.preventDefault prevents that refresh
*	Want to pass the function without parenthesis just to reference and not to have it actually return something b/c that would be undefined
*	For some reason getting the option from event e is e.target.elements.option.value, phew thats long

## OnFormSubmit
*	push is method to append to an array
*	Remember that after submission, we want to clear the input with e.target.elements.option.value = ""

## Arrays in JSX
*	Remember that map function returns an array and just calling an array in jsx makes it show up together without whitespaces
*	So using map and adding html to each element and return that array renders in html
*	Array elements need a key!

## Constructors in classes and default values
*	You can make a default value by in the constructor(name = 'anon') you still get value name if passed in if not then its set to anon

## ES6 Template Strings
*	Can inject values with backticks for example return `Hi I am ${ this.name }!` 

## We can extend
*	Just rememeber to call super with the values of the above 

## Logical NOT operator in ES6
*	We can take an empty string and turn it to true like this
	``` !'' ```

*	We can take a string and turn it to true like this
	```!!'foo'```
	
*	We can take undefined and turn it to false like this
	```	!!undefined```

## React Components
*	Requires a render method

## Component Props
*	React takes what you would think are HTML attributes and converts that into an object of key-value pairs and that gets passed down as props to the component that we could use

## Remember Maps
*	Mapping through the array in JSX actually returns that transformed thing unlike a foreach

## Trim
*	Don't forget trim on strings to remove whitespaces before and after the string

## Method Binding
*	Being able to call a function depends on its context.
* 	To use a function outside of its context, you need to call bind on the method and the object as its first argument
*  	So when we try to call this.props on an outside function besides render, it doesn't work
*  	To fix this, we have to bind change the onClick to bind to "this"
*	Expensive operation because we have to call bind every time the component re-renders 

## A Better Way Than Method Binding
*	A better way to do this is to override the constructor function
* 	From here we call bind once on our functions to ensure their in the right context by setting the function equal to itself than bind with "this"
*  	This ensure the function is in the correct/same context as props
*	Just call bind once when the component is initialized

## Component State
*	Instead of calling render each time we make a change, component state handles that for us and re-renders it when the state changes

1.	Setup the default state object
2. 	Render component with default values 
3. 	Change State based on event
4.	Application re-renders itself
5.	Back to step 3

## SetState
*	Instead of updating the state object manually, we are going to use setState because the former doesn't re-render the component whereas setState does
* 	It takes one argument which is a function that returns an object
*  	That function takes in the prevState which has the object and its key value pairs
*  	Only have to change what you want to change in the state when you update. We're not overriding the state completely just changing the values
*   Always pass a function

## Note on Returns
*	In this.setState, the return is wrapped in curly braces, in return in render, it is wrapped in parenthesis

## Manipulating Parent State
*	Props are a one way street from parent to a child
* 	To solve this, pass functions in as props.

## Concat Metod
*	Append to array

## Stateless Functional Component
*	Just the same as an arrow function that returns JSX
* 	You don't need to make it this.props just props since its being passed in
*  	Faster than class based components

## Default Props Values
*	After specifiying the component, you can specify default prop values if none were passed in 

```
Header.defaultProps {
	title: 'test'
};
```

## React Dev Tools
*	In inspect tools, you have the react developer toolbar
* 	We get JSX tree view
	*  	regular html shown in grey
	*  	shows component topdown view
	*  	shows the props of each component and state
*	Also allows you to search by component
* 	== $r at the end of each line is what we have selected as a global variable so in console you can check it on the console. So click the component then go on the console and do whatever you want with that

## Arrow Function Object vs Body
*	To return an object, wrap in parethesis than curly braces, curly braces for function body
* 	Returning object 

``` 
this.setState(() => ({ options: [] }));
```

*	Versus

```
this.setState(() => {
	return {
		options: []
	};
};
```

## Important Note about () vs {{
*	To clarify the above, these two are equivalent where the first returns an option object and the second returns an option object too but has to specift the return keyword since its using brackets which indicate a function body

```
{props.options.map((option) => (
	<Option optionText={option} />
))}
```

```
{props.options.map((option) => {
	return <Option optionText={option} />
})}
```

## Error Messages
*	You can have the function cut early and return a string to get an error and use that as a prop or w/e

## Console.log
*	You can console log multiple things like so

```
console.log('hbo', option);
```

## Array Filter
*	Filter Array Method takes in a callback function
* 	That callback function, w/e it returns, if it's true, it will include it in the new array, if it is false, it won't

## Lifecycle Methods
*	Only for class based components
*	Stateless components also don't have to manage lifecycle

#### ComponentDidMount()
*	When component first mounts	
	
#### ComponentDidUpdate(prevProps, prevState)
*	When component updates/changes

#### ComponentWillUnmount()
*	When component goes away

## Local Storage
*	Only stores string data
* 	Did you know that JSON stands for JavaScript Object Notation

## JSON
*	JSON stringify turns an JS object into string representation
* 	JSON parse turns a string rep into a JS object

**Saving to local storage**

```
componentDidUpdate(prevProps, prevState) {
	if(this.state.options.length !== prevState.options.length) {
		const json = JSON.stringify(this.state.options);
		localStorage.setItem('options', json);
	}
}
```

**Fetching from local storage**

```
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
```

## NaN
*	Stands for Not a number
* 	There is a isNaN function to check

## Parsing Int
```
const count = parseInt(countString, 10);
if(!isNaN(count)) {
	this.setState(() => ({ count }));
}
```

##	Webpack
*	Can break code up into import/export statements and different files
* 	Allows for only one script tag for one JS file
*  	Also applies for dependencies, not just your smaller files

#### Before
*	We have index file, utils.js, app.js, etc.js and we load them into index via script tags and they have to be in order. All of this in public folder

#### After
* 	Now, with **Webpack**, we have a public folder, src and node modules folder. App.js in the src folder takes all the other js files and stores it itself and then **webpack** takes that app.js and spits out bundle.js is what will be in the public folder so all you have is the index.html and bundle.js
*	Webpack will run the babel command, compress the code and then you just load to index via one index tag

## Global Modules
### Why it's bad
*	If you use global modules, you're not giving someone else knowledge of it because its not defined in the package.json
* 	If you have multiple projects, the versions aren't specified
*  	Also, you have to use terminal to always run

## Dependencies vs devDependencies
*	It might sound just what you think but the difference is that if NODE_ENV (Node environmental variables) is set to production, npm will only install dependencies and not devDependencies
* 	It'll work both ways but the benefit is that deploying will take less time (more scalable) because we are only installing the dependencies we need for production.

## After Removing Global Dependencies
*	After you remove your global dependencies and install them locally via yarn or npm, you then have to specify the scripts in package

### Scripts in package.json
*	Key-value pairs. Can just run with the name instead. 

Example:

```
"scripts": {
    "build": "babel src -d lib",
    "server": "live-server public/"
  },
```

* Now we can run it with:

```
yarn run server
```

## Webpack
*	Runs babel for us

```
yarn add webpack
```

*	Webpack does nothing without a config file
* 	The config file needs to be in the root of the folder 

### Webpack.config.js
*	In the root we need a webpack.config.js
* 	The file needs to tell webpack where it should start and where it needs to output
*  	The output is ana absolute path but its different for everyone so we use the **__dirname** variable
*  	[Node path manipulation](https://nodejs.org/api/path.html#path_path_join_paths)

```
const path = require('path')
```
*	This loads the path module that we need
* 	The rest is to specify where everything is going

```
const path = require('path');

module.exports = {
	entry: 	'./src/app.js',
	output: {
		path: path.join(__dirname, 'public'),
		filename: 'bundle.js'
	}
};
```

* So now, when we run webpack with **yarn run build** with the script we specified, webpack will get the entry point and output the file at the path we specified as *bundle.js*

## ES6 Import/Export
*	We can't just import a file and use whatever functions are within it because it would pollute the global namespace and when we get more and more files, we'll definitely have issues with variables or functions with the same naming conventions
* 	To solve this we:

## Named Exports/Imports

#### Named Exports
*	We have to export exactly what we need at the end

```
export { square, add };
```

*	You could export inline as you define the functions as well:

```
export const add = (a, b) => a + b;
```

#### Import From Named Export
*	We import exactly what was exported

```
import { square, add } from './utils.js';
```

* order doesn't matter

___

## Default
*	Can only have a single default export
* 	Gets exported without naming it in brackets in the import
*	Usually just use this for one big component

### Exporting

```
export {square, add, subtract as default };
```

```
const subtraction = (a,b) => a - b;
export default subtract;
```

```
export default (a, b) => a - b;
```

## Importing NPM Modules
*	Install, import, use
* 	To know what module you want to import, you'll have to look at the documentation
*	Require is an #ES5 syntax so remember to be wary of that

## Setting up Webpack with Babel with loader
*	Webpack isnt set up with babel so it doesn't understand es6 syntax
* 	We need to update the webpack config file with a loader that can transform the file before bundling it
	*	We do this by installing babel core and babel loader
*	We want to specify a rule with the module, this is the loader
* 	We need a .babelrc, a json file to take all the args from the command line there such as its presets: env and react

*	**webpack config	**


```
const path = require('path');

module.exports = {
	entry: 	'./src/app.js',
	output: {
		path: path.join(__dirname, 'public'),
		filename: 'bundle.js'
	},
	module: {
		rules: [{
			loader: 'babel-loader',
			test: /\.js$/,
			exclude: /node_modules/
		}]
	}
};
```
*	**.babelrc**


```
{
	"presets": [
		"env",
		"react"
	]
}
```

## One Component Per File
*	Components file in src and we name the file the same as the component
* 	We can remove the .js on importing
*  	export default works for classes inline but not functions
	*   so just do it at the end

## Source Maps
*	It makes it a lot easier to debug the code 
* 	Every time you change webpack config you have to run build again

```
devtool: 'cheap-module-eval-source-map'
```

```
const path = require('path');

module.exports = {
	entry: 	'./src/app.js',
	output: {
		path: path.join(__dirname, 'public'),
		filename: 'bundle.js'
	},
	module: {
		rules: [{
			loader: 'babel-loader',
			test: /\.js$/,
			exclude: /node_modules/
		}]
	},
	devtool: 'cheap-module-eval-source-map'
};
```

## Webpack Dev Server
*	Dev server similar to live-server but has
	*	Speeds up hot reloading

```
yarn add webpack-dev-server
```

*	The main thing we need to set up is contentBase to the devServer object to specify what we are serving. This is inside the webpack config file

```
devServer: {
		contentBase: path.join(___dirname, 'public')
	}
```

*	Dont forget to clean up the scripts
*	The webpack dev server is generating the bundle file from memory which keeps it fast
* 	Yarn run build will make the bundle js file but the dev server script does not do that

## babel-plugin-transform-class-properties
*	Allows for new syntax
*	Need to add it via yarn first then add the plugin into your .babelrc file
* 	We don't need to specify this.state everytime for example and instead use key-value pairs
*  	The class-properties syntax also lets you create functionswithout messing up bindings

### Old

```
class OldSyntax {
	constructor() {
		this.name = "mike";
		this.getGreeting = this.getGreeting.bind(this);
	}
	getGreeting() {
		return `Hi, my name is ${this.name}.`;
	}
}

const old = new OldSyntax();
const greet = old.getGreeting;
```


### New

```
class NewSyntax {
	name = "jord";
	getGreeting = () => {
		return `Hi, my name is ${this.name}.`
	}
}

const newSyn = new NewSyntax();
const newGreet = newSyn.getGreeting;
```

## Passing Children to Component
*	Besides props we can pass props.children which is the content between the two tags in render

```
const Layout = (props) => {
	return (
		<div>
			<h1>Header</h1>
			{props.children}
			<h1>Footer</h1>
		</div>
	)
}

ReactDOM.render((
	<Layout>
		<p>
			Test Content
		</p>
	</Layout>
), document.getElementById("app"));
```

## Styling React
### Setting up webpack with SCSS
*	Need to create a new rule and use a **css loader** and **style loader**
* 	**use** lets us use multiple loaders 

### SASS vs SCSS
*	SASS has no semicolons, SCSS does

### SCSS
*	We need a loader to compile scss files
*	yarn add sass-loader, node-sass

#### New Webpack Config

```
const path = require('path');

module.exports = {
	entry: 	'./src/app.js',
	output: {
		path: path.join(__dirname, 'public'),
		filename: 'bundle.js'
	},
	module: {
		rules: [{
			loader: 'babel-loader',
			test: /\.js$/,
			exclude: /node_modules/
		}, {
			test:/\.scss$/,
			use: [
				'style-loader',
				'css-loader',
				'sass-loader'
			]
		}]
	},
	devtool: 'cheap-module-eval-source-map',
	devServer: {
		contentBase: path.join(__dirname, 'public')
	}
};
```

####  In app.js

```
import './styles/styles.scss';
```

### Architecture and Header Styles
*	We create a base folder which contains the base styles like the global font family.
	* 	The files inside this are called **partials** and prefixed with an underscore
*	Importing from a partial
	*	Just a normal import except leave off the extensions and underscore
* 	rem-based values
	*  1 rem is about 16 pixels
	*	To make this easier, convert font size overall to 62.5% which converts REMS to base 10
		* 	Now, 1.6 rem is equal to 16 px etc. and that makes it easier
*  	We also have a components folder with things like _header.scss, _footer.scss etc.

#### REM vs EM
>	While em is relative to the font-size of its direct or nearest parent, rem is only relative to the html (root) font-size.

#### BEM Naming Convention
*	http://getbem.com/naming/

#### Normalize
*	Remember to normalize across browsers
	* 	yarn add normalize-css then import it in app.js
	*  	Also update the webpack to load css files as well with s?css instead of scss

#### Theme Variables
*	First import is going to be a settings scss file in the base folder
* 	This is just to store variables
*  	Sass Reference Functions to help darken, etc.

#### Flexbox
*	Set display type to flex
* 	Everything is distributed left to right
*  	Adjust the justify attribute to space-between or whatever. How you want to use that space leftover.

#### To have the tag take up the extra space
```
flex-grow: 1;
```

### CSS Direct Descendants
*	AKA affect one level down of class

```
.ReactModalPortal > div {}
```

### CSS Transitioning

```
.ReactModalPortal>div {
	opacity: 0;
}

.ReactModalPortal .ReactModal__Overlay {
	transition: opacity 200ms ease-in-out;
}

.ReactModalPortal .ReactModal__Overlay--after-open {
	opacity: 1;
}

.ReactModalPortal .ReactModal__Overlay--before-open {
	opacity: 0;
}
```

### Flex vertical center
```
align-items: center;
```

### Flex horizontal center
```
justify-content: center;
```

### Words Breaking
*	By default words dont break and go left-to-right

### Use real device width
```
<meta name="viewport" content="width=device-width, initial-scale=1">
```