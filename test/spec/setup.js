'use strict';

if (typeof process === 'object') {
	global.chai = require('chai');
	global.expect = chai.expect;
	global.assert = chai.assert;
	global.should = chai.should;

	Object.prototype.toString = function (el) {
		return 'Element';
	};

	require('mocha-jsdom')();
} else {
	window.expect = window.chai.expect;
	window.assert = window.chai.assert;
	window.should = window.chai.should;
	window.require = function () { /* noop */ }
}
