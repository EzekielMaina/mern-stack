'use strict';
require('../../modules/es.set');
require('../../modules/esnext.set.difference.v2');
var entryUnbind = require('../../internals/entry-unbind');

module.exports = entryUnbind('Set', 'difference');
