var Router = Backbone.Router.extend({
	routes: {
		'': 'index',
		'abc': 'abc',
		'search/:q': 'search'
	},

	index: function () {
		$(document.body).append("Index route has been called . . .");
	},

	abc: function () {
		$(document.body).append("abc route has been called . . .");
	},

	search: function (query) {
		$(document.body).append("search route has been called . . . with q=" + query);
	}
});