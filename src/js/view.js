import Scene from './classes/scene';
export default class View {
    constructor() {
        this.scene = new Scene('#scene');
    }

    setGames(games, index) {
        this.scene.drawGames(games, index);
        this.setTitle(games[index].getTitle());
        this.setDescription(games[index].getDescription());
    }

    moveCamera(index) {
        this.scene.moveCamera(index);
    }

    setTitle(title) {
        document.getElementById('title').innerHTML= title;
    }

    setDescription(description) {
        document.getElementById('description').innerHTML= description;
    }

    moveCamera(index, previousIndex) {
        this.scene.moveCamera(index, previousIndex);
    }

}