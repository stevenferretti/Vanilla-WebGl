import KeyListener from './classes/keyListener';

export default class Controller {
    constructor(model) {
        this.model = model;
        this.setListeners();
    }

    setListeners() {
        KeyListener.setListener('ArrowRight', ()=> {this.moveRight()});
        KeyListener.setListener('ArrowLeft', ()=> {this.moveLeft()});
    }

    moveRight() {
        this.model.incrementSelectedGameIndex();
    }

    moveLeft() {
        this.model.decrementSelectedGameIndex();
    }
}