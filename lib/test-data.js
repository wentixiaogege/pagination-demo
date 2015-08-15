Items = new Mongo.Collection("items");

if (Meteor.isServer && Items.find().count() !== 1000) {
  // resets items collection
  Items.remove({});

  Items._ensureIndex({
    id: 1
  });

  // adds 1000 items to `items` collection
  for (var i = 1; i < 1001; i++) {
    Items.insert({
      id: i,
      text: 'Hello from item #' + i + '!'
    });
  }
}