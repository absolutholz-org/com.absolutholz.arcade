// https://blog.theodo.com/2019/08/empower-your-dev-environment-with-eslint-prettier-and-editorconfig-with-no-conflicts/
// https://glebbahmutov.com/blog/configure-prettier-in-vscode/

module.exports = {
	parser: '@typescript-eslint/parser',
	extends: [
		'plugin:react/recommended',
		'plugin:@typescript-eslint/recommended',
		'eslint:recommended',
		'prettier',
		'plugin:prettier/recommended',
		'prettier/@typescript-eslint',
	],
	plugins: ['prettier'],
	rules: {
		'prettier/prettier': 'error',
	},
};
