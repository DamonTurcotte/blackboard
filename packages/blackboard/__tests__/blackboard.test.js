'use strict';

const blackboard = require('..');
const assert = require('assert').strict;

assert.strictEqual(blackboard(), 'Hello from blackboard');
console.info('blackboard tests passed');
