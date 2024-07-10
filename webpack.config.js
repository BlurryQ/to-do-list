const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    mode: "development",
    entry: {
        main: path.resolve(__dirname, "src/index.js")
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
        clean: true,
    },
    devtool: "inline-source-map",
    devServer: {
        port: 5299,
        open: true,
        hot: true,
    },
    module: {
        rules: [
            {test: /\.css$/, use: ["style-loader", "css-loader"]}
        ]
    },
    plugins: [new HTMLWebpackPlugin({
        title: "Woof | To Do List",
        filename: "index.html",
        template: path.resolve(__dirname, "src/template.html")
    })],
}