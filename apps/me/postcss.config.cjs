const autoprefixer = require('autoprefixer');
const openProps = require('open-props');
const postcssCustomMedia = require('postcss-custom-media');
const postcssGlobalData = require('@csstools/postcss-global-data');
const postcssJitProps = require('postcss-jit-props');

const config = {
	plugins: [
		autoprefixer,
		postcssGlobalData({
			files: ['node_modules://open-props/media.min.css']
		}),
		postcssCustomMedia(),
		postcssJitProps(openProps)
	]
};

module.exports = config;
