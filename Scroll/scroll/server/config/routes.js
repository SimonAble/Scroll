console.log("inside of routes.js");

const Users = require("../controllers/users");
const Posts = require("../controllers/posts");
const Comments = require("../controllers/comments");

module.exports = function(app){
  //users
  app.get("/users", Users.getAll);
  app.post("/user", Users.getUser);
  app.post("/users", Users.create);
  app.get("/user", Users.getUserById);
  app.put("/users/:id", Users.update);
  app.delete("/users/:id", Users.delete);
  app.get("/logout", Users.logout);
  //posts
  app.get("/posts", Posts.getAll);
  app.get("/posts/:id", Posts.getById);
  app.post("/posts", Posts.create);
  app.put("/posts/:id", Posts.update);
  app.delete("/posts/:id", Posts.delete);
  //comments
  app.post("/comments/:id", Comments.create);
  app.put("/comments/:id", Comments.update);
  app.delete("/comments/:id", Comments.delete);
}
