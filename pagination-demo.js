Pages = new Meteor.Pagination(Items, {
  itemTemplate: "Item",
  route: "/items/",
  router: "iron-router",
  routerTemplate: "Items",
  routerLayout: "Layout",
  sort: {
    id: 1
  },
  templateName: "Items"
});