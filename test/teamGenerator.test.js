import TeamGenerator from "../src/teamGenerator.js";
import { expect } from "chai";

describe("testing teamGenerator class", () => {
    let teamGenerator;
    const players = ['player1', 'player2', 'player3', 'player4', 'player5', 'player6'];

    beforeEach(() => {
        teamGenerator = new TeamGenerator(players);
    });

    it("should generate 2 teams", () => {
        teamGenerator.generateTeams();
        const teams = teamGenerator.getTeams();
        expect(teams).to.have.lengthOf(2);
    });

    it("teams should contains 3 players", () => {
        teamGenerator.generateTeams();
        const teams = teamGenerator.getTeams();
        teams.forEach(team => {
            expect(team.players).to.have.lengthOf(3);
        });
    });
});