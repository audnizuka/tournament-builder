import TeamGenerator from "../src/teamGenerator.js";
import TournamentGenerator from '../src/tournamentGenerator.js';
import { expect } from 'chai';

describe('TournamentGenerator', () => {
    let tournamentGenerator;
    const totalPlayers = 2 * 12;
    let players = [];
    for (let i = 0; i < totalPlayers; i++) {
        players.push(`player${i + 1}`);
    }
    const teamGenerator = new TeamGenerator(players);
    teamGenerator.generateTeams(players);
    const teams = teamGenerator.getTeams();

    beforeEach(() => {
        tournamentGenerator = new TournamentGenerator(teams);
    });

    it('should generate correct number of poules', () => {
        console.log(teams)
        tournamentGenerator.generatePoules();
        expect(tournamentGenerator.poules.length).to.equal(tournamentGenerator.teams.length / 4);
    });
});