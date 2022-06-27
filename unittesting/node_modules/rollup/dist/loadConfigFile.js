/*
  @license
	Rollup.js v2.75.6
	Tue, 07 Jun 2022 14:42:22 GMT - commit 0ab16cc04b7d6dfe5bd14340ba7448085a379e25

	https://github.com/rollup/rollup

	Released under the MIT License.
*/
'use strict';

const loadConfigFile = require('./shared/loadConfigFile.js');
require('path');
require('process');
require('url');
require('./shared/rollup.js');
require('perf_hooks');
require('crypto');
require('fs');
require('events');
require('tty');
require('./shared/mergeOptions.js');



module.exports = loadConfigFile.loadAndParseConfigFile;
//# sourceMappingURL=loadConfigFile.js.map
