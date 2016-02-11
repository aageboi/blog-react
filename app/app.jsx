import React from 'react';
import { render } from 'react-dom'
import { Router, Route, IndexRoute } from 'react-router'

import styles from '../styles/app.scss'

import Navigation from './components/template/Navigation';
import Footer from './components/template/Footer';
import Home from './components/home/Home';
import Posts from './components/posts/PostItem';
import About from './components/about/About';
import NotFound from './components/NotFound';

console.log('apeu');

class Application extends React.Component {
	render() {
		return (
			<div>
				<Navigation />
				{this.props.children}
				<Footer />
			</div>
		);
	}
}

const router = (
    <Router>
        <Route path="/" component={Application}>
        	<IndexRoute component={Home} />
            <Route path="posts/:product_id" component={Posts} />
            <Route path="about" component={About} />
            <Route path="*" components={NotFound} />
        </Route>
    </Router>
)

render(router, document.getElementById('application'));
