import { fileURLToPath } from 'url';
import { dirname } from 'path';
import path from 'path'; // Add this line
import TerserPlugin from 'terser-webpack-plugin';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './dist'),
        publicPath: 'dist/'
    },
    mode: 'none',
    module: {
        rules:[
            {
                test:/\.(ttf)$/,
                type:'asset/resource'
            },
            {
                test:/\.(png|jpg)$/,
                type:'asset/resource'
            },
            {
                test:/\.(png|jpg)$/,
                type:'asset',
                parser:{
                    dataUrlCondition: {
                        maxSize: 3*1024 // 3 kilobytes
                    }
                }
            },
            {
                test:/\.txt$/,
                type:'asset/source',
            },
            {
                test:/\.css$/,
                use:[
                    'style-loader','css-loader'
                ],
            },
            {
                test: /\.js$/, // Apply Babel only to JavaScript files
                exclude: /node_modules/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: ['@babel/env'],
                    plugins: ['@babel/plugin-proposal-class-properties'],
                  },
                },
              },
        ]
    },
    plugins:[
        new TerserPlugin()
    ]
};
