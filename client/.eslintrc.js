module.exports = {
	root: true,
	env: {
		node: true,
	},
	extends: [
		'plugin:vue/vue3-strongly-recommended',
		'eslint:recommended',
		'@vue/prettier',
	],
	parserOptions: {
		parser: 'babel-eslint',
	},
	rules: {
		'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		indent: ['error', 'tab'],
		'max-len': 'off',
		'prettier/prettier': [
			'error',
			{
				printWidth: 80,
				singleQuote: true,
				useTabs: true,
			},
		],
	},
};
