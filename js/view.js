var PersonView = Backbone.View.extend({
	tagName: 'li',
	
	initialize: function () {
		this.render();
	},

	events: {
		'click': 'showAlert'
	},

	showAlert: function () {
		alert('you clicked ' + this.model.get('name'));
	},

	my_template: _.template( $('#personTemplate').html() ),
	// my_template: _.template(" <%= name %>(<%= age %>) - <%= occupation %>"),

	render: function () {
		this.$el.html(this.my_template(this.model.toJSON()));
		return this;
	}
});

var PeopleView = Backbone.View.extend({
	
	initialize: function () {
	},

	tagName: 'ul',

	render: function () {
		this.collection.each(function (person) {
			var personView = new PersonView({model: person});
			this.$el.append(personView.el);
		}, this);
		return this;
	}

});