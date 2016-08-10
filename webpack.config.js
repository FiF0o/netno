var webpack = require('webpack');
var UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
var env = process.env.WEBPACK_ENV || 'dev';
var WebpackDevServer = require('webpack-dev-server');
var path = require('path');
const sassLintPlugin = require('sasslint-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

var appName = 'app';
var host = '0.0.0.0';
var port = '9000';

var plugins = [], outputFile;

if (env === 'build') {
  plugins.push(new UglifyJsPlugin({ minimize: true }));
  outputFile = appName + '.[name].min.js';
} else {
  outputFile = appName + '.[name].js';
}

var config = {
  entry: './src/components/index.js',
  devtool: 'source-map',
  output: {
    path: __dirname + '/dist/',
    filename: outputFile,
    // publicPath: __dirname + '/example'
    
    
    publicPath: './'
  
  
  },
  module: {
    loaders: [
      {
        test: /(\.jsx|\.js)$/,
        loader: 'babel',
        exclude: /(node_modules|bower_components)/,
        query: {
          presets: ['react', 'es2015']
        }
      },
      {
        test: /(\.jsx|\.js)$/,
        loader: "eslint-loader",
        exclude: /node_modules/
      },
      
      
      {
        test: /\.(sass|scss)$/,
        loaders: [
          "style-loader", // passing query parameter using ? instead of the object
          "css-loader?sourceMap",
          "sass-loader?sourceMap"
        ],
        exclude: [/vendors/, /bower_components/]
      },
      { test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader") },
      { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&mimetype=application/font-woff" },
      { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" }
      
      
    ]
  },
  resolve: {
    root: path.resolve('./src'),
    extensions: ['', '.js', '.jsx']
  },
  
  
  // plugins: plugins
  
  
  plugins: [
    new sassLintPlugin({
      configFile: './.sass-lint.yml',
      context: ['inherits from webpack'],
      ignoreFiles: [],
      ignorePlugins: [],
      glob: '**/*.s?(a|c)ss',
      quiet: false,
      failOnWarning: false,
      failOnError: false,
      testing: false
    }),
    // creates html file on the fly
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      title: 'App title',
      filename: 'index.html',
      //  inject:'',
      //  favicon: '',
      minify: false,
      // js: [ 'index.js' ],
      
      
      js: outputFile,
      
      
      // chunks: {
      //   'head': {
      //     'css': 'main.css'
      //   },
      //   'main': {
      //     'entry': outputFile
      //   }
      // }
      
      
    }),
    new ExtractTextPlugin("styles.css")
  ]
  
  
};

if (env === 'dev') {
  new WebpackDevServer(webpack(config), {
    contentBase: './example',
    hot: true,
    debug: true
  }).listen(port, host, function (err, result) {
    if (err) {
      console.log(err);
    }
  });
  console.log('-------------------------');
  console.log('Local web server runs at http://' + host + ':' + port);
  console.log('-------------------------');
}

module.exports = config;
