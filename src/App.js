import './App.scss';
import React, { useEffect } from "react";
import { useState } from "react";

// components
import Teams from './components/Teams/Teams';
import Table from './components/Table/Table';
import Result from './components/Result/Result';

function App() {
  const [players1, setPlayers1] = useState(Array(4).fill({ name: "", team: "", pontuation: [0, 0, 0] }));
  const [team1, setTeam1] = useState({name: "", pontuation: 0});
  const [players2, setPlayers2] = useState(Array(4).fill({ name: "", team: "", pontuation: [0, 0, 0] }));
  const [team2, setTeam2] = useState({ name: "", pontuation: 0 });
  const [numberOfGames, setNumberOfGames] = useState(3);

  useEffect(() => {
    // START APP CACHE and DEFAULT VALUES
    if (localStorage.getItem("Team1") !== null) {
      setTeam1(JSON.parse(localStorage.getItem("Team1")));
    }
    if (localStorage.getItem("Team2") !== null) {
      setTeam2(JSON.parse(localStorage.getItem("Team2")));
    }
    if (localStorage.getItem("Players1") !== null) {
      setPlayers1(JSON.parse(localStorage.getItem("Players1")));
    }
    if (localStorage.getItem("Players2") !== null) {
      setPlayers2(JSON.parse(localStorage.getItem("Players2")));
    }
  },[])

  return (
    <div className="App">
      <Teams numberOfGames={numberOfGames} setNumberOfGames={setNumberOfGames} players1={players1} setPlayers1={setPlayers1} team1={team1} setTeam1={setTeam1} players2={players2} setPlayers2={setPlayers2} team2={team2} setTeam2={setTeam2} />
      <Table numberOfGames={numberOfGames} players1={players1} setPlayers1={setPlayers1} setPlayers2={setPlayers2} players2={players2} team1={team1} setTeam1={setTeam1} team2={team2} setTeam2={setTeam2}/>
      <Result players1={players1} players2={players2} team1={team1} setTeam1={setTeam1} team2={team2} setTeam2={setTeam2}/>
    </div>
  );
}

export default App;
