var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var rest_api = require('./routes/rest_api')

app.use(bodyParser.json()); // for parsing application/json
//app.use(/^((?!.*abc).*)/, express.static(__dirname + '/'));
app.use('/', express.static(__dirname + '/'));
app.use('/memories', express.static(__dirname + '/'));
app.use('/monthly', express.static(__dirname + '/'));
app.use('/write', express.static(__dirname + '/'));

app.all('/api/add', function (req, res, next) {
  console.log('Add API is called...');
  api = new rest_api();
  result = api.write(req);
  if (result) {
    res.json({success: true})
  }
});

app.all('/api/list', function (req, res, next) {
  console.log('List API is called...');
  api = new rest_api();
  api.list(req, res);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
module.exports = function(grunt) {
  grunt.initConfig({
    'download-electron': {
      version: '0.33.0',
      outputDir: 'build'
    }
  });
};
