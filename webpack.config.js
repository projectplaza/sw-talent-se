module.exports = {
    mode: 'development',
    entry: {
        customer: './src/customer.js'
    },
    devtool: 'source-map',
    output: {
      path: __dirname,
      filename: 'public/js/[name].js'
    },
    module: {
      rules: [
        {
          test: /\.js$/, 
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['babel-preset-env']
            }
          }
        }
      ]
    }
  }