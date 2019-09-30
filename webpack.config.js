module.exports = {
  mode: "development", //can change to production
  entry: './src/index.js', // the starting point for our program for executing and budling
  output: { // 
    path: __dirname + '/public', // the absolute path for the directory where we want the output (HTML page) to be placed
    filename: 'bundle.js' // the name of the file that will contain our output - we could name this whatever we want, but bundle.js is typical
  }
}