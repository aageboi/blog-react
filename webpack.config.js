const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
	entry: {
		app: "./app/app.jsx"
	},
	output: {
		filename: "[name].js",
	    path: "./public/assets",
	    publicPath: "/assets/"
	},
  	externals: {
      	jquery: 'jQuery'
  	},
	module: {
		loaders: [
			{
				test: /\.(js|jsx)$/,
				exclude: [/node_modules/],
        		loaders: ["babel-loader?presets[]=airbnb"]
			},
		    {
		        test: /\.scss$/,
		        loader: ExtractTextPlugin.extract(
		            'style-loader',
		            'css!sass?outputStyle=expanded'
		            + '&includePaths[]=' + path.resolve(__dirname, './bower_components/foundation-sites/scss')
		            + '&includePaths[]=' + path.resolve(__dirname, './bower_components/motion-ui/src')
		        )
		    },
	      	{
		        test: /\.css$/,
		        loader: "style-loader!css-loader"
      		}
		]
	},
	plugins: [
        new ExtractTextPlugin('app.css', { allChunks: true }),
    ],

  	resolve: {
      root: path.resolve('./bower_components/foundation-sites/dist'),
      alias: {
        jquery: path.resolve('./bower_components/jquery/dist/jquery.js')
      }
  	}
};