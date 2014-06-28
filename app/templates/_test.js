'use strict';

var assert = require('assert');
var <%= projNamespace %> = require('../lib/<%= projModuleName %>');

describe('<%= projNamespace %>', function () {
  it('imports correctly', function () {
    assert(<%= projNamespace %>);
  });
});
