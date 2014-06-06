var Person = Backbone.Model.extend({
  initialize: function () {
    this.on("invalid", function (model, error) {
      console.log(error);
    });
  },
  
  defaults: {
    name: 'Guest user',
    age: 21,
    occupation: 'student'
  },

  validate: function (attributes) {
    console.log('inside validate method');
    if (attributes.age < 0) {
      return 'Age must be +ve';
    }

    if (!attributes.name) {
      return 'Every person must have a name';
    }
  },

  work: function () {
    return this.get('name') + ' is playing :P';
  }
});