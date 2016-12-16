const nba = require('nba')


nba.stats.playerInfo({
  PlayerID: "0",
  SeasonType: "Regular Season",
  LeagueID: "00"
}, function(err, data) {
  console.log(data);
})

nba.stats.teamInfoCommon({
  LeagueID: "00",
  Season: "2016-17",
  SeasonType: "Regular Season",
  TeamID: "1610612742"
})
// .then(response => response.json())
.then(response => console.log(response))

nba.stats.playerProfile({
  Season: "2016-1",
  SeasonType: "Regular Season",
  LeagueID: "00",
  PlayerID: "201566",
  GraphStartSeason: "2016-17",
  GraphEndSeason: "2016-17",
  GraphStat: "PTS"
}).then(data => console.log("playerProfile:", data))

nba.stats.homepageV2({
  GameScope: "Season",
  LeagueID: "00",
  PlayerOrTeam: "Player",
  PlayerScope: "All Players",
  Season: "2016-17",
  SeasonType: "Regular Season",
  StatType: "Traditional"
}).then(data => console.log('homepageV2:', data))

nba.stats.playerStats({
  College: "",
  Conference: "",
  Country: "",
  DateFrom: "",
  DateTo: "",
  Division: "",
  DraftPick: "",
  DraftYear: "",
  GameScope: "",
  GameSegment: "",
  Height: "",
  LastNGames: "0",
  LeagueID: "00",
  Location: "",
  MeasureType: "Base",
  Month: "0",
  OpponentTeamID: "0",
  Outcome: "",
  PORound: "0",
  PaceAdjust: "N",
  PerMode: "PerGame",
  Period: "0",
  PlayerExperience: "",
  PlayerPosition: "",
  PlusMinus: "N",
  Rank: "N",
  Season: "2016-17",
  SeasonSegment: "",
  SeasonType: "Regular Season",
  ShotClockRange: "",
  StarterBench: "",
  TeamID: "0",
  VsConference: "",
  VsDivision: "",
  Weight: ""
}).then(data => console.log("stats:", data))
