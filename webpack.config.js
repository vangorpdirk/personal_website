const htmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const FaviconWebpackPlugin = require("favicons-webpack-plugin");

module.exports = {
    plugins: [
        new htmlWebpackPlugin({template: "./src/html/index.html", filename: "index.html"}),
        new MiniCssExtractPlugin({
            filename: "[name].css"
        }),
        new FaviconWebpackPlugin('./src/images/letter-D.png')
    ],

    module: {
        rules: [
            {
                test: /\.s?css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    {
                        loader: "sass-loader",
                        options: {
                            implementation: require("sass")
                        }
                    }
                ]
            }, {
                test: /\.(gif|png|jpe?g)$/i,
                use: ["file-loader",
                    {
                        loader: "image-webpack-loader"
                    }]
            }, {
                test: /\.(html)$/,
                use: {
                    loader: 'html-loader',
                    options: {
                        attrs: [':data-src']
                    }
                }
            }
        ]
    }
};