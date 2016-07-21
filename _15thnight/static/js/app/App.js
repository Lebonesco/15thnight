import React, {Component} from 'react';
import {render} from 'react-dom';
import {hashHistory} from 'react-router';
import { Router, Route, IndexRoute} from 'react-router';


class App extends Component {
	constructor(props) {
		super(props)
	}
	render() {
		console.log('App Component')
		return (
			<div>
			<h1>App Component</h1>
			{this.props.children}
			</div>
		);
	}
}
class Test1 extends Component {
	render() {
		console.log('test1');
		return (
			<div>
			<h1>Test1</h1>
			</div>
		);
	}
}
class Test2 extends Component {
	render() {
		console.log('test2');
		return (
			<div>
			<h1>Test2</h1>
			</div>
		);
	}
}

render((
    <Router history={hashHistory}>
            <Route path="/" component={App}>
            <Route path="advocate_test" component={Test1}/>
            <Route path="analytics" component={Test2}/>
           	</Route>
    </Router>
    ), document.getElementById('root'));

