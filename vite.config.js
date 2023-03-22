import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import eslint from 'vite-plugin-eslint';
import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(), eslint()],
	resolve: {
		alias: [
			{ find: '@', replacement: path.resolve(__dirname, 'src') },
			{
				find: '@helpers',
				replacement: path.resolve(__dirname, 'src/utils/helpers'),
			},
			{
				find: '@hooks',
				replacement: path.resolve(__dirname, 'src/utils/hooks'),
			},
		],
	},
});
