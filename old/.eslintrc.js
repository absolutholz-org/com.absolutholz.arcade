// https://blog.theodo.com/2019/08/empower-your-dev-environment-with-eslint-prettier-and-editorconfig-with-no-conflicts/
// https://glebbahmutov.com/blog/configure-prettier-in-vscode/

module.exports = {
	env: {
		node: true,
		browser: true,
		es6: true,
	},
	parser: '@typescript-eslint/parser',
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		// 'react-app',
		'plugin:@typescript-eslint/recommended',
		'plugin:prettier/recommended',
		'prettier',
	],
	plugins: ['prettier'],
	rules: {
		'prettier/prettier': 'error',
		// 'react/jsx-curly-spacing': ['error', 'always'],
		'react/jsx-uses-react': 'off',
		'react/react-in-jsx-scope': 'off',
		'react/no-unescaped-entities': 'off',
		'object-curly-spacing': ['error', 'always'],
	},
	overrides: [
		{
			files: ['*.ts', '*.tsx'],
			rules: {
				'no-undef': 'off',
			},
		},
	],
};
