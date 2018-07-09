import express from 'express';
import routes from './routes';
import initController from './controller';
import initDomain from './domain';
import initStore from './store';

const app = express();
const store = initStore();
const domain = initDomain(store);
const controller = initController(domain);
routes(app, controller);

module.exports = app;
