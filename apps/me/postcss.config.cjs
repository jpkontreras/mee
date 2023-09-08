const autoprefixer = require('autoprefixer');
const postcssCustomMedia = require('postcss-custom-media');
const postcssJitProps = require('postcss-jit-props');
const postcssGlobalData = require('@csstools/postcss-global-data');
const openProps = require('open-props');

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
