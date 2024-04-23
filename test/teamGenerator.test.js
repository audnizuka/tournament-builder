import TeamGenerator from "../src/teamGenerator.js";
import { expect } from "chai";

describe("testing teamGenerator class", () => {
    let teamGenerator;
    const players = ['player1', 'player2', 'player3', 'player4', 'player5', 'player6'];

    beforeEach(() => {
        teamGenerator = new TeamGenerator(players);
    });
});