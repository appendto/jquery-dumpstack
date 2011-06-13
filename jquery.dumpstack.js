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
        if (console && console.log) {
            console.log(msg);
        }
    }

    function logEvents(index, events) {
        if (events) {
            $.each(events, function(key, handler) {
                log(index + ': eventName - ' + key);
                if (handler) {
                    $.each(handler, function(j, evtHandler) {
                        // Check for older versions of jQuery.
						if (evtHandler.handler) {
							log('   ' + j + ': eventHandler - ' + ' JS[' + evtHandler.handler.toString().substr(0, 45) + '...]');
						} else {
							log('   ' + j + ': eventHandler - ' + ' JS[' + evtHandler.toString().substr(0, 45) + '...]');
						}
                    })
                }
            })
        };
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
								+ ($(this).is(':input') ? ' VAL[' + $(this).val() + ']' : '')
								+ (title === true || content ? ' HTML[' + ($.trim($(this).html().substr(0, 45))) + '...]' : '')

				);

                var events = $(this).data('events');

                logEvents(i, events);
            });
            log('dumpStack (end)');
        }
        return this;
    };
})(jQuery);
