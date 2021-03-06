var
fs = require('fs'),
jsxgettext = require('../lib/jsxgettext'),
utils = require('./utils'),
path = require('path');

exports['test results should be alphabetically sorted when sort is true'] = function (assert, cb) {
  var inputFilename = path.join(__dirname, 'inputs', 'sorted.js');
  fs.readFile(inputFilename, "utf8", function (err, source) {
    var opts = {sort: true},
        sources = {'inputs/sorted.js': source},
        result = jsxgettext.generate(sources, opts);
    assert.equal(typeof result, 'string', 'result is a string');
    assert.ok(result.length > 0, 'result is not empty');

    var outputFilename = path.join(__dirname, 'outputs',
                                  'sorted.pot');

    utils.compareResultWithFile(result, outputFilename, assert, cb);
  });
};

if (module == require.main) require('test').run(exports);
