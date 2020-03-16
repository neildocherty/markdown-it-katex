// eslint-disable-next-line import/no-extraneous-dependencies
import markdownIt from 'markdown-it';

import mk from './index';

const md = markdownIt();

md.use(mk);

const input = document.getElementById('input');
const output = document.getElementById('output');
const button = document.getElementById('button');

button.addEventListener('click', () => {
	const result = md.render(input.value);

	output.innerHTML = result;
});
