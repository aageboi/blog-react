import React from 'react';
import { render } from 'react-dom'
import { Router, Route, IndexRoute } from 'react-router'

import styles from '../styles/app.scss'

import Navigation from './components/template/Navigation';
import Footer from './components/template/Footer';

import Home from './components/home/Home';
import Post from './components/posts/Post';
import About from './components/about/About';
import NotFound from './components/NotFound';

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
            <Route path="posts/:postId" component={Post} />
            <Route path="about" component={About} />
            <Route path="*" components={NotFound} />
        </Route>
    </Router>
)

render(router, document.getElementById('application'));
