import AppController from './controllers/AppController';
import AppModel from './models/AppModel';
import AppView from './views/AppView';
import constants from './constants';
import './views/scss/appView.scss';

const model = new AppModel(constants.key, constants.domain);
const view = new AppView();
const app = new AppController(model, view);

app.start();
