import Http from './classes/http';
const http = new Http();
import Game from './classes/game'
import getDeep from './utils/getDeep';

export default class Model {
    constructor(view) {
        this.view = view;
        this.setGames();
        this.games = [];
        this.selectedGameIndex = 5;
    }

    /**
     * 
     * @param {string} date default: Date given in project
     */
    setGames(date =  '2018-06-10') {
        http.get(`http://statsapi.mlb.com/api/v1/schedule?hydrate=game(content(editorial(recap))),decisions&date=${date}&sportId=1`)
        .then((data) =>{
            let games = (getDeep(JSON.parse(data),'dates.0.games')).map(game =>{
                // Get the highest res image, less than 500 width and with an aspect ratio of 4:3
                let bestLowResImage = [...getDeep(game, 'content.editorial.recap.away.image.cuts') || [], ...getDeep(game, 'content.editorial.recap.home.image.cuts') || []]
                            .filter(img => (img.aspectRatio === '4:3' && img.width < 500))
                            .sort((x,y) => x.width > y.width ? -1 : 1)
                            [0];
                bestLowResImage = bestLowResImage ? bestLowResImage : false;
                return new Game(game.dayNight, game.seriesDescription, getDeep(game, 'teams.away'), getDeep(game, 'teams.home'), game.venue, bestLowResImage)
            });
            this.games = games;
            this.view.setGames(this.games, this.selectedGameIndex);
        })

    }

    incrementSelectedGameIndex() {
        if (this.selectedGameIndex + 1 < this.games.length) {
            const previousSelectedIndex = this.selectedGameIndex;
            this.selectedGameIndex++;
            this.view.moveCamera(this.selectedGameIndex, previousSelectedIndex);
            this.view.setTitle(this.games[this.selectedGameIndex].getTitle());
            this.view.setDescription(this.games[this.selectedGameIndex].getDescription());
        }
    }

    decrementSelectedGameIndex() {
        if (this.selectedGameIndex - 1 >= 0) {
            const previousSelectedIndex = this.selectedGameIndex;
            this.selectedGameIndex--;
            this.view.moveCamera(this.selectedGameIndex, previousSelectedIndex);
            this.view.setTitle(this.games[this.selectedGameIndex].getTitle());
            this.view.setDescription(this.games[this.selectedGameIndex].getDescription());
        }
    }


}
