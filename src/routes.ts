import express from 'express';

import PointsController from './controllers/PointsControllers';
import ItemsController from './controllers/ItemsControllers';

//index, show, create, update, delete
const routes = express.Router();
const pointsController = new PointsController();
const itemsController = new ItemsController();
//Requeste Param : Parâmetros que vem na própria rota que idntificam
//Query Param: Parâmetros que vem na rota, mas que são opcionais
//Request Body
routes.get('/items', itemsController.index);

routes.post('/points', pointsController.create);
routes.get('/points', pointsController.index);
routes.get('/points/:id', pointsController.show);
export default routes;


