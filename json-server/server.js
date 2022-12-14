// See https://github.com/typicode/json-server#module
const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

server.use(middlewares);
// Add this before server.use(router)
server.use(
  jsonServer.rewriter({
    "/api/*": "/$1",
    // "/api/categories": "/categories",
    // "/api/recipes?category": "/recipes?category=:category",
    // "/api/recipes/:slug": "/recipes?slug=:slug",
  })
);
server.use(router);
server.listen(5000, () => {
  console.log("JSON Server is running");
});

// Export the Server API
module.exports = server;
