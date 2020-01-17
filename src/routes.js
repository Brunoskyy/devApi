const { Router } = require('express');

const DevController = require('./controllers/DevController')
const SearchController = require('./controllers/SearchController')
const DestroyController = require('./controllers/DestroyController')
const UpdateController = require('./controllers/UpdateController')

const routes = Router();

routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store);

routes.get('/search', SearchController.index);

routes.delete('/destroy/:dev', DestroyController.destroy);

routes.put('/update', UpdateController.update);

module.exports = routes;