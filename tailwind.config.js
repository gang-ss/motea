const unit = {};
const htmlFontSize = 16;
for (let count = 0; count <= 3000; count++) {
	unit[count] = count / htmlFontSize + 'rem';
}

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {},
	},
	presets: [
		{
			theme: {
				spacing: unit,
				fontSize: unit,
				borderRadius: unit,
				extend: {
					lineHeight: unit,
				},
			},
		},
	],
	plugins: [],
};
