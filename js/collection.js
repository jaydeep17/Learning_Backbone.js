var PeopleCollection = Backbone.Collection.extend({
	model: Person
});

var peopleCollection = new PeopleCollection([
	{
		name: 'jaydeep',
		age: 21
	},
	{
		name: 'nimesh',
		age: 17
	}
]);