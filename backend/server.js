

const jsonServer = require('json-server')
const server = jsonServer.create()
const path = require('path')
const router = jsonServer.router(path.join(__dirname, './db.json'))
const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use(router)

const PORT = process.env.PORT || 8000;
server.listen(PORT, () => {
  console.log('JSON Server is running')
})


// const jsonServer = require('json-server');
// const server = jsonServer.create();
// const router = jsonServer.router('./db.json');
// const middlewares = jsonServer.defaults({
//   static: './build'
// });
// const PORT = process.env.PORT || 8000;
// server.use(middlewares);
// server.use(jsonServer.rewriter({
//   '/api/*': '/$1',
// }))
// server.use(router);
// server.listen(PORT, () => {
//   console.log('Server is running');
// });
