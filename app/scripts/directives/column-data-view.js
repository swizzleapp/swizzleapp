angular.module('swizzleApp')
	.directive('columnDataView', function($window) {
		return {
			restrict: 'A',
			link: function(scope, element, attrs) {
				var doc = $(document),
					window = angular.element($window),
					sidebarWidth = $("#sidebar").width(),
					calculatedHeight = (window.outerHeight() - 62) * 0.75,
					calculatedWidth = window.outerWidth() - sidebarWidth,
					paneEl = $('#' + element.context.id),
					pane = paneEl.resizable({
						maxHeight: (attrs.maxHeight ? attrs.maxHeight : calculatedHeight),
						maxWidth: calculatedWidth,
						minHeight: (attrs.minHeight ? parseInt(attrs.minHeight, 10) + 62 : calculatedHeight),
						minWidth: attrs.minWidth
					});

					paneEl.width(calculatedWidth);
					paneEl.height(attrs.defaultHeight);

					window.bind('resize', function() {
						calculatedHeight = (window.outerHeight() - 62) * 0.75;
						calculatedWidth = window.outerWidth() - sidebarWidth;
						sidebarWidth = $("#sidebar").width();

						pane.resizable("option", {
							maxHeight: (attrs.maxHeight ? attrs.maxHeight : calculatedHeight),
							maxWidth: calculatedWidth,
							minHeight: (attrs.minHeight ? parseInt(attrs.minHeight, 10) + 62 : calculatedHeight),
							minWidth: attrs.minWidth
						});

						paneEl.width(calculatedWidth);
					});
			}
		};
	});