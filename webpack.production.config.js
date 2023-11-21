import { fileURLToPath } from 'url';
import { dirname } from 'path';
import path from 'path'; // Add this line
import TerserPlugin from 'terser-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import {CleanWebpackPlugin} from 'clean-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default {
    entry:{
        'index':'./src/index.js',
        'kiwi':'./src/kiwi.js',
    } ,
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, './dist'),
        publicPath: ''  // webpack generate the path through the publicPath that s why we have to change it in order to correct the address in the html file generated by html-webpack-plugin 
        // publicPath: 'dist/' 
      
    },
    // mode: 'none',
    mode: 'production',
    optimization:{
      splitChunks:{
        chunks:'all'
      }
    },
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
                    MiniCssExtractPlugin.loader,'css-loader'
                ],
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
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
            //   {
            //     test:/\.hbs$/,
            //     use:[
            //         'handlebars-loader'
            //     ],
            // },
        ]
    },
    plugins:[
        new TerserPlugin(),
        new MiniCssExtractPlugin({filename:'[name].[contenthash].css'}),
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns:[
                '**/*',
                // path.join(process.cwd(), 'build/**/*'),
                path.join(process.cwd(), 'dist/**/*'),
            ]
        }),
        new HtmlWebpackPlugin({
            filename: 'test.html',
            chunks: ['index'],
            title: 'test',
            template: 'src/index.hbs',
            meta:{
                description:'test description 1'
            },
            minify: false
        }),
        new HtmlWebpackPlugin({
            filename: 'kiwi.html',
            chunks: ['kiwi'],
            title: 'kiwi',
            template: 'src/index.hbs',
            meta:{
                description:'test description 2'
            },
            minify: false
        }),
    ]
};
