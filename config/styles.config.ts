/* eslint-disable import/no-extraneous-dependencies */
import { resolve } from 'path';
import { defineConfig } from 'vite';
import banner from 'vite-plugin-banner';
import dts from 'vite-plugin-dts';

export default defineConfig({
	publicDir: './package/public',
	build: {
		target: 'ES6',
		assetsDir: '',
		outDir: './package/build',
		cssCodeSplit: true,
		minify: true,
		emptyOutDir: false,
		rollupOptions: {
			output: {
				inlineDynamicImports: false,
				assetFileNames: (assetInfo) => {
					if (assetInfo.name && ['light.css', 'dark.css'].includes(assetInfo.name)) {
						return 'themes/[name].min.[ext]';
					}
					return '[name].min.[ext]';
				},
			},
			input: {
				main: resolve(__dirname, '../package/src/styles/vanilla-calendar.css'),
				layout: resolve(__dirname, '../package/src/styles/vanilla-calendar.layout.css'),
				light: resolve(__dirname, '../package/src/styles/themes/light.css'),
				dark: resolve(__dirname, '../package/src/styles/themes/dark.css'),
			},
		},
	},
	plugins: [
		banner({
			outDir: './package/build',
			content: 'name: vanilla-calendar-picker | url: https://github.com/uvarov-frontend/vanilla-calendar-picker',
		}),
		dts({
			include: ['./package/src'],
			compilerOptions: {
				declaration: true,
				declarationMap: true,
			},
		}),
	],
});
