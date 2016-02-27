'use strict';

var upstreamMergeTrees = require('broccoli-merge-trees');

module.exports = function(inputTree, options) {
  options = options || {};
  options.description = 'TreeMerger (' + options.annotation + ')';

  var tree = upstreamMergeTrees(inputTree, options);
  tree.description = options.description;

  return tree;
};
