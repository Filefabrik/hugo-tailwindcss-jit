module.exports = {
	// mode    : 'jit',
	mode    : 'production' !== process.env.NODE_ENV ?'jit':'',
	purge   : ['layouts/**/*.html'],
	darkMode: false, // or 'media' or 'class'
	theme   : {
		extend: {},
	},
	variants: {},
	plugins : [],
}
