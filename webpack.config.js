const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require("path");

//NOTE the loaders and plugins used, they will need to be installed if
//making a react app from scratch

module.exports = {
  module: {
    rules: [
      {
        //Note: this rule is to transpile ES6 syntax to browser-friendly syntax
        //identifies the javascript and JSX files
        test: /\.(js|jsx)$/,
        //excludes those in node_modules - these do not need to be transpiled
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            babelrc: false,
            presets: [
              "@babel/preset-env",
              "@babel/preset-react",
              "@babel/preset-typescript"
            ],
            plugins: [
              ["@babel/plugin-proposal-class-properties", {loose:true}],
              "react-hot-loader/babel"
            ]
          }
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader'
          }
        ]
      },
      //#notetake - css modules and react material css (global) will have issues, so you need separate loaders.
      {
        test: /\.css$/,
        sideEffects: true,
        //change exclude according to need
        exclude: [
          path.resolve('./node_modules/material-components-web'),
          path.resolve('./node_modules/@material'),
          path.resolve('./node_modules/@rmwc')
        ],
        use: [
          //#notetake - style loader only works in development, not in production.
          'style-loader', 
          'css-loader?modules=true'
        ],
      },
      {
        test: /\.css$/,
        sideEffects: true,
        //change include according to need
        include: [
          path.resolve('./node_modules/material-components-web'),
          path.resolve('./node_modules/@material'),
          path.resolve('./node_modules/@rmwc')
        ],
        use: [
          'style-loader', 
          'css-loader'
        ],
      },
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: './index.html'
    })
  ]
};