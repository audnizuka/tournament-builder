class TeamGenerator {
  constructor(players, playersPerTeam = 3) {
    this.players = players;
    this.playersPerTeam = playersPerTeam;
    this.teams = [];
  }

  generateTeams() {
    let groupedPlayers = this.players.map(player => Array.isArray(player) ? player : [player]);
    let shuffledGroups = [...groupedPlayers].sort(() => 0.5 - Math.random()); // Mélange aléatoire des joueurs
    let teamIndex = 0;

    while (shuffledGroups.length > 0) {
      let teamPlayers = [];

      while (teamPlayers.length < this.playersPerTeam && shuffledGroups.length > 0) {
        let group = shuffledGroups.shift();
        teamPlayers.push(...group.slice(0, this.playersPerTeam - teamPlayers.length));
      }

      let teamName = `Équipe ${teamIndex + 1}`;
      let team = {
        name: teamName,
        players: teamPlayers,
      };

      // TDD vérifie les doublons
      let uniquePlayerNames = new Set(teamPlayers);
      if (teamPlayers.length !== uniquePlayerNames.size) {
        console.error(`Erreur : Doublon détecté dans l'équipe ${teamName}.`);
        return;
      }

      this.teams.push(team);
      teamIndex++;
    }
  }

  getTeams() {
    return this.teams;
  }
}

export default  TeamGenerator
// Exemple d'utilisation

