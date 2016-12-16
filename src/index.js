import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
// import playerSplits from './js/server.js'
// const express = require('express');
// const bodyParser= require('body-parser');

const nba = require('nba')
// let app = express();
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());
nba.stats.teamPlayerDashboard({
  MeasureType: "Base",
  PerMode: "PerGame",
  PlusMinus: "N",
  PaceAdjust: "N",
  Rank: "N",
  LeagueID: "00",
  Season: "2016-17",
  TeamID: "0",
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
  LastNGames: "0"
}).then(data => console.log("dashboard", data))

nba.stats.playerProfile({
  Season: "2016-17",
  SeasonType: "Regular Season",
  LeagueID: "00",
  PlayerID: "201566",
  GraphStartSeason: "2016-17",
  GraphEndSeason: "2016-17",
  GraphStat: "PTS"
}).then(data => console.log("playerProfile:", data))

nba.stats.playersInfo()
.then(data => console.log(data))

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
