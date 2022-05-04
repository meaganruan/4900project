// // server.js
// const jsonServer = require('json-server')
// const server = jsonServer.create()
// const middlewares = jsonServer.defaults()

// server.use(middlewares)
// server.listen(8080, () => {
//   console.log('JSON Server is running')
// })

// server.get("/events/", (req,res) => {
//   const input = req.query.zipcode; //?zipcode_like=:input
//   res.send("testing")
// })

// const jsonServer = require('json-server')
// const server = jsonServer.create()
// const router = jsonServer.router('./data/events.json')
// const middlewares = jsonServer.defaults()

// server.use(middlewares)
// server.use(router)
// server.listen(8080, () => {
//   console.log('JSON Server is running')
// })


const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('./db.json');
const middlewares = jsonServer.defaults({
  static: './build'
});
const PORT = process.env.PORT || 8000;
server.use(middlewares);
server.use(jsonServer.rewriter({
  '/api/*': '/$1',
}))
server.use(router);
server.listen(PORT, () => {
  console.log('Server is running');
});
