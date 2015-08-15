Pages = new Meteor.Pagination(Items, {
  homeRoute: ["/", "/items/"],
  itemTemplate: "ItemTemplate",
  route: "/items/",
  router: "iron-router",
  routerTemplate: "Items",
  routerLayout: "Layout",
  sort: {
    id: 1
  },
  templateName: "Items"
});

if (Meteor.isClient) {

} else {

}