Create Blog using React and Webpack
by aageboi 
21 January 2016


1. Create configuration file webpack.config.js

const webpack = require('webpack')

module.exports = {
	entry: {
		app: "./app/app.jsx"
	},
	output: {
		filename: "[name].js",
	    path: "./public/assets",
	    publicPath: "/assets/"
	},
	module: {
		loaders: [
			{
				test: /\.(js|jsx)$/,
				exclude: [/node_modules/],
        		loaders: ["babel-loader?presets[]=airbnb"]
			},
		    {
		        test: /\.css$/,
		        loader: "style-loader!css-loader"
		    }
		]
	}
};


2. Create folder app and public/assets
3. Install module webpack

npm install webpack --save
npm install webpack-dev-server -g


4. Install module loader untuk mengeksekusi file js dan jsx, disini menggunakan babel-loader dengan presets=airbnb

npm install babel-core babel-loader babel-preset-airbnb --save


5. Install module loader untuk css

npm install style-loader css-loader --save


6. Install module react dan react-dom

npm install react react-dom --save


7. Update app.jsx

import React from 'react'
import { render } from 'react-dom'

class Application extends React.Component {
	render() {
		return (
			<div>Hello world</div>
		);
	}
}

render(<Application />, document.getElementById('application'));


8. Update index.html yg ada di public

<!DOCTYPE html>
<html>
<head>
	<title>Blog React</title>
</head>
<body>
	<div id="application"></div>
	<script type="text/javascript" src="/assets/app.js"></script>
</body>
</html>


9. Generate native css file dari pada import css langsung di aplikasi.
   Install module extract-text-webpack-plugin

npm install extract-text-webpack-plugin --save




5. Run aplikasi

webpack-dev-server --hot --inline --display-error-details --content-base public
