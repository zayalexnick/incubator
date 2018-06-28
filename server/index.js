const jsonServer = require('json-server');
const server = jsonServer.create();
const path = require('path');
const router = jsonServer.router(path.join(__dirname, 'db.json'));
const middlewares = jsonServer.defaults();

server
    .use(middlewares)
    .use('/api', router);

server.listen(5555, () => console.log(`Running`));