import TeamGenerator from "../src/teamGenerator.js";
import { expect } from "chai";

describe("testing teamGenerator class", () => {
    let teamGenerator;
    const players = ['player1', 'player2', 'player3', 'player4', 'player5', 'player6', ['player7', 'player8']];

    beforeEach(() => {
        teamGenerator = new TeamGenerator(players);
    });

    it("should generate 2 teams", () => {
        teamGenerator.generateTeams();
        const teams = teamGenerator.getTeams();
        console.log(teams)
        expect(teams).to.have.lengthOf(2);
    });

    it("teams should contains 3 players", () => {
        teamGenerator.generateTeams();
        const teams = teamGenerator.getTeams();
        teams.forEach(team => {
            expect(team.players).to.have.lengthOf(3);
        });
    });

    it("players who join the generator together should be in the same team and teams should be equals", () => {
        teamGenerator.generateTeams();
        const teams = teamGenerator.getTeams();
        teams.forEach(team => {
            console.log(team);
            expect(team.players).to.have.lengthOf(teamGenerator.playersPerTeam);
            if (team.players.includes('player7')) {
                expect(team.players).to.include('player8');
            }
        });
    });
});