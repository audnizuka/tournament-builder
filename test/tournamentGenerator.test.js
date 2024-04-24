import TeamGenerator from "../src/teamGenerator.js";
import TournamentGenerator from '../src/tournamentGenerator.js';
import { expect } from 'chai';

describe('TournamentGenerator', () => {
    const totalPlayers = 2 * 12;
    let players = [];
    for (let i = 0; i < totalPlayers; i++) {
        players.push(`player${i + 1}`);
    }
    const teamGenerator = new TeamGenerator(players);
    teamGenerator.generateTeams(players);
    const teams = teamGenerator.getTeams();

});