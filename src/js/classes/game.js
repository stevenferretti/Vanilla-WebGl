import getDeep from '../utils/getDeep'
export default class Game {
    constructor(dayNight, seriesDescription, awayTeam, homeTeam, venue, image){
        this.dayNight = dayNight;
        this.seriesDescription = seriesDescription;
        this.awayTeam = awayTeam;
        this.homeTeam = homeTeam;
        this.venue = venue;
        this.image = image;
    }


    getTitle() {
        return `${getDeep(this.awayTeam, 'team.name')} at ${getDeep(this.homeTeam, 'team.name')}`
    }

    getDescription() {
        return `
        The ${getDeep(this.awayTeam, 'leagueRecord.wins')} and ${getDeep(this.awayTeam, 'leagueRecord.losses')} ${getDeep(this.awayTeam, 'team.name')} 
        take on the ${getDeep(this.homeTeam, 'leagueRecord.wins')} and ${getDeep(this.homeTeam, 'leagueRecord.losses')} ${getDeep(this.homeTeam, 'team.name')} at 
        ${this.venue.name}`
    }

    getImage() {
        return this.image;
    }
}