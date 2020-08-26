import KeyListener from './classes/keyListener';

import Model from './model';
import View from './view';
import Controller from './controller';


const view = new View();
const model = new Model(view);
const controller = new Controller(model);