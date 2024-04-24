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

    it('should generate poules with correct number of teams', () => {
        tournamentGenerator.generatePoules();
        tournamentGenerator.poules.forEach(poule => {
            expect(poule.length).to.equal(4);
        });
    });

    it('should simulate poules matches correctly', () => {
        tournamentGenerator.generatePoules();
        tournamentGenerator.simulatePoulesMatches();
        console.log(tournamentGenerator.finalStages[0].length)
        expect(tournamentGenerator.finalStages[0].length).to.equal(players.length / 6);
    });

    it('should generate final stages correctly', () => {
        tournamentGenerator.generatePoules();
        tournamentGenerator.simulatePoulesMatches();
        tournamentGenerator.generateFinalStages();
        expect(tournamentGenerator.finalStages.length).to.be.greaterThan(1);
    });

    it('should generate tournament correctly', () => {
        const finalStages = tournamentGenerator.generateTournament();
        expect(finalStages.length).to.be.greaterThan(1);
        expect(finalStages[finalStages.length - 1].length).to.equal(1);
    });
});