const cfgTw = {
	purge: {
		content: ['layouts/**/*.html'],
		options: {
			safelist: ['do_not_purge_classes_'],
		},
	},
	
	darkMode: false, // or 'media' or 'class'
	theme   : {
		extend: {},
	},
	variants: {},
	plugins : [],
};
'production' !== process.env.NODE_ENV ? cfgTw.mode = 'jit' : null;

module.exports = cfgTw;
