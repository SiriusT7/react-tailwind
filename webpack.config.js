const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
   module: {
      rules: [
         {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
               loader: "babel-loader",
               options: {
                  presets: ['@babel/preset-env', '@babel/preset-react']
               }
            }
         },
         {
            test: /\.css$/,
            use: [
               MiniCssExtractPlugin.loader,
               "css-loader", "postcss-loader",
            ],
         },
         {
            test: /\.(png|jp(e*)g|svg|gif)$/,
            use: ['file-loader'],
         },
      ]
   },
   plugins: [
      new MiniCssExtractPlugin({
         filename: "styles.css",
         chunkFilename: "styles.css"
      }),
      new HtmlWebPackPlugin({
         template: "./src/index.html",
         filename: "./index.html"
      }),
   ],
   resolve: {
      extensions: ['*', '.js', '.jsx'],
   }
};