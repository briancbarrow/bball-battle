const express = require('express');
// const mongoose = require('mongoose');
// const FewestGuesses = require('./models/guesses');
const bodyParser = require('body-parser');
const nba = require('nba')
// const cors = require('cors')


let app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// app.use(cors());
const port = 8080;

// let playerSplits = function(id) {
  // nba.stats.playerSplits({
  //   Season: "2016-17",
  //   SeasonType: "Regular Season",
  //   LeagueID: "00",
  //   PlayerID: "20156",
  //   MeasureType: "Base",
  //   PerMode: "PerGame",
  //   PlusMinus: "N",
  //   PaceAdjust: "N",
  //   Rank: "N",
  //   Outcome: "",
  //   Location: "",
  //   Month: "0",
  //   SeasonSegment: "",
  //   DateFrom: "",
  //   DateTo: "",
  //   OpponentTeamID: "0",
  //   VsConference: "",
  //   VsDivision: "",
  //   GameSegment: "",
  //   Period: "0",
  //   LastNGames: "0"
  // })
  nba.stats.teamPlayerDashboard({
    MeasureType: "Base",
    PerMode: "PerGame",
    PlusMinus: "N",
    PaceAdjust: "N",
    Rank: "N",
    LeagueID: "00",
    Season: "2016-17",
    TeamID: "50",
    Outcome: "",
    Location: "",
    Month: "0",
    SeasonSegment: "",
    DateFrom: "",
    DateTo: "",
    OpponentTeamID: "0",
    VsConference: "",
    VsDivision: "",
    GameSegment: "",
    Period: "0",
    LastNGames: "0",
    SeasonType: "Regular Season"
  })
  .then(data => console.log("splits", data))
// }

app.listen(process.env.PORT || port, function() {
  console.log("listening on port 8080")
})
// module.exports = playerSplits;
