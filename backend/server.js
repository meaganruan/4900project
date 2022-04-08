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

const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('./data/events.json')
const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use(router)
server.listen(8080, () => {
  console.log('JSON Server is running')
})