'use strict';

angular.module('swizzleApp')
	.directive('playerSidebar', function($window) {
		return {
			restrict: 'A',
			link: function(scope, element, attrs) {
				var doc = $(document),
					window = angular.element($window),
					calculatedHeight = window.outerHeight() - 62,
					calculatedWidth = window.outerWidth() * 0.85,
					paneEl = $('#' + element.context.id),
					pane = paneEl.resizable({
						maxHeight: (attrs.fullHeight ? calculatedHeight : attrs.maxHeight),
						maxWidth: calculatedWidth,
						minHeight: (attrs.fullHeight ? calculatedHeight : attrs.minHeight),
						minWidth: attrs.minWidth
					});

				element.width(attrs.minWidth);
				element.height(calculatedHeight);

			 	window.bind('resize', function() {
			 		calculatedHeight = window.outerHeight() - 62;
					calculatedWidth = window.outerWidth() * 0.85;

					pane.resizable("option", {
						maxHeight: (attrs.fullHeight ? calculatedHeight : attrs.maxHeight),
						maxWidth: calculatedWidth,
						minHeight: (attrs.fullHeight ? calculatedHeight : attrs.minHeight),
						minWidth: attrs.minWidth
					});

					paneEl.height(calculatedHeight);
				});

			}
		};
	});