// import json-server
const jsonServer = require('json-server')

// create a server for app
const credAppServer = jsonServer.create()

// set up path/route from  json file
const router = jsonServer.router("db.json")

// returns middlewars used b json server
const middlewares = jsonServer.defaults()

// set up port for running server
const port = 4000 || process.env.PORT

// use middlewares and router in server
credAppServer.use(middlewares)
credAppServer.use(router)

// to listen server for resolving request from client
credAppServer.listen(port,()=>{
    console.log(`media player server started at port ${port} ,and waiting for client request !!!`);
})