/* eslint-disable import/no-extraneous-dependencies */
import { resolve } from 'path';
import { defineConfig } from 'vite';
import banner from 'vite-plugin-banner';
import eslint from 'vite-plugin-eslint';
import dts from 'vite-plugin-dts';

export default defineConfig({
	build: {
		target: 'ES6',
		assetsDir: '',
		outDir: './package/utilities',
		minify: false,
		emptyOutDir: false,
		lib: {
			name: 'VanillaCalendarUtilities',
			fileName(format) { return `index${format === 'es' ? '.mjs' : '.js'}`; },
			entry: resolve(__dirname, '../package/src/utilities.ts'),
		},
	},
	resolve: {
		alias: {
			'@': resolve(__dirname, '../'),
			'@package': resolve(__dirname, '../package'),
			'@src': resolve(__dirname, '../package/src'),
			'@scripts': resolve(__dirname, '../package/src/scripts'),
		},
	},
	plugins: [
		banner({
			outDir: './package/utilities',
			content: 'name: vanilla-calendar-picker | url: https://github.com/uvarov-frontend/vanilla-calendar-picker',
		}),
		eslint(),
		dts({
			include: ['./package/src'],
			compilerOptions: {
				declaration: true,
				declarationMap: true,
			},
		}),
	],
});
