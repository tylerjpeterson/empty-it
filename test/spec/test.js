'use strict';

require('./setup');

/**
 * emptyIt mocha tests
 * @see https://mochajs.org/
 */
describe('emptyIt', function () {
	var emptyIt;
	var dom;

	before(function () {
		emptyIt = require('./../../') || window.emptyIt;
	})

	beforeEach(function () {
		dom = buildMarkup();
	})

	var buildMarkup = function () {
		var container = document.createElement('div');
		var grandchild = document.createElement('div');
		var wrapper = document.createElement('div');
		var child1 = document.createElement('div');
		var child2 = document.createElement('div');
		document.body.appendChild(container);

		container.classList.add('container');
		container.id = 'container';
		container.innerHTML = '';

		child2.appendChild(grandchild);
		wrapper.appendChild(child1);
		wrapper.appendChild(child2);
		container.appendChild(wrapper);

		child1.classList.add('child1');
		child2.classList.add('child2');
		wrapper.classList.add('wrapper');
		grandchild.classList.add('grandchild');

		return {
			d: document.body,
			c: container,
			w: wrapper,
			c1: child1,
			c2: child2
		};
	};

	it('should be a function', function () {
		assert.equal(typeof emptyIt, 'function');
	});

	it('should remove all child elements of passed element', function () {
		emptyIt(dom.w);
		assert.equal(dom.w.querySelectorAll('*').length, 0);
	});

	it('should remove itself', function () {
		emptyIt(dom.c1, true);
		assert.equal(dom.c.querySelectorAll('div').length, 3);
	});

	it('should not impact parent elements', function () {
		emptyIt(dom.c2);
		assert.equal(dom.c.querySelectorAll('div').length, 3);
	});

	it('should return false when passed invalid element', function () {
		var container = document.getElementById('containerzzz');
		assert.equal(emptyIt(container), false);
	});

	it('should return true when element is removed', function () {
		assert.equal(emptyIt(dom.c2, true), true);
	});

	it('should return the element when removing children', function () {
		assert.equal(emptyIt(dom.w), dom.w);
	});
});
