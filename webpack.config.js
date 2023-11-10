import { fileURLToPath } from 'url';
import { dirname } from 'path';
import path from 'path'; // Add this line

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './dist'),
    },
    mode: 'none',
};