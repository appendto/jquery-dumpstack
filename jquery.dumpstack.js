/*!
 * dumpStack - jQuery Plugin for revealing a collection
 *
 * Version: 1.0
 * Released: 2010-04-26
 * Source: http://labs.appendto.com/jquery-plugins/dumpstack
 * Author: Jonathan Sharp (http://jdsharp.com)
 * License: MIT,GPL
 * 
 * Copyright (c) 2010 appendTo LLC.
 * Dual licensed under the MIT and GPL licenses.
 * http://appendto.com/open-source-licenses
 */
(function($) {
	function log(msg) {
		if ( console && console.log ) {
			console.log(msg);
		}
	}
	// Debugging methods
	$.fn.dumpStack = function(title, content) {
		if (this.length == 0) {
			log('dumpStack ' + (title ? '(' + title + ') ' : '') + 'empty');
		} else {
			log('dumpStack ' + (title ? '(' + title + ') ' : '') + this.length);
			this.each(function(i) {
				log(i + ': '
								+ this.tagName
								+ (this.id ? '#' + this.id : '')
								+ (this.className != '' ? '.' + this.className.replace(/\s/g, '.') : '')
								+ ( $(this).is(':input') ? ' VAL[' + $(this).val() + ']' : '' )
								+ (title === true || content ? ' HTML[' + $(this).html().substr(0, 45) + '...]' : ''));
			});
			log('dumpStack (end)');
		}
		return this;
	};
})(jQuery);
