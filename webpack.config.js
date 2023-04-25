const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

module.exports = {
    mode: "none",
    entry: {
        app: path.join(__dirname, "src", "index.tsx"),
    },
    target: "web",
    resolve: {
        extensions: [".ts", ".tsx", ".js"],
        alias: {
            features: path.resolve(__dirname, "src/features"),
            components: path.resolve(__dirname, "src/components"),
            assets: path.resolve(__dirname, "src/assets"),
            context: path.resolve(__dirname, "src/context"),
            data: path.resolve(__dirname, "src/data"),
        },
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: "ts-loader",
                exclude: "/node_modules/",
            },
            {
                test: /\.(css)$/,
                loaders: ["style-loader", "css-loader"],
            },
            {
                test: /\.svg$/,
                loader: "url-loader",
            },
        ],
    },
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, "dist"),
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "src", "index.html"),
        }),
        new TsconfigPathsPlugin(),
    ],
};
