'use strict';

/**
 * Empties and optionally removes an element in the DOM-friendliest manner.
 * @module emptyIt
 *
 * @param {Element} element - Element to empty
 * @param {Boolean} [remove=false] - Whether or not to remove element
 * @return {(Boolean|Element)} - Returns false if element is not an element, true if element is emptied and removed, and returns element if element is emptied
 */
var emptyIt = function (element, remove) {
	/**
	 * Determine if passed value is a valid element
	 * @param {Element} value - Value to evaluate
	 * @return {Boolean} - Return true if value is element, otherwise false
	 */
	var isElement = function (value) {
		return !!(value &&
			typeof value === 'object' &&
			value.nodeType === 1 &&
			Object.prototype.toString.call(value).indexOf('Element') > -1);
	};

	if (!isElement(element)) {
		return false;
	}

	while (element.firstChild) {
		element.removeChild(element.firstChild);
	}

	if (Boolean(remove) && element.parentNode) {
		element.parentNode.removeChild(element);
		return true;
	}

	return element;
};

module.exports = emptyIt;
