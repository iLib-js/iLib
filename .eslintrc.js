module.exports = {
	env: {
		es6: true, // sets the 'ecmaVersion' parser option to 6
		node: true
	},
	extends: ['eslint:recommended'],
	rules: {
		'no-console': 0,
		'no-control-regex': 0,
		'no-debugger': 1,
		'no-empty': 0,
		'no-negated-in-lhs': 2,
		'no-regex-spaces': 0,
		'block-scoped-var': 1,
	}
};
