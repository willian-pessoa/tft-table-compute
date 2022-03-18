import './App.scss';
import React from "react";
import { useState } from "react";

// components
import Teams from './components/Teams/Teams';
import Table from './components/Table/Table';
import Result from './components/Result/Result';

function App() {
  const [players1, setPlayers1] = useState(Array(4).fill({name: "a",team: "t",pontuation:[0,0,0]}));
  const [team1, setTeam1] = useState("");
  const [players2, setPlayers2] = useState(Array(4).fill({name: "b",team: "e",pontuation:[0,0,0]}));
  const [team2, setTeam2] = useState("");
  const [numberOfGames, setNumberOfGames] = useState(3);



  return (
    <div className="App">
      <Teams numberOfGames={numberOfGames} setNumberOfGames={setNumberOfGames} players1={players1} setPlayers1={setPlayers1} team1={team1} setTeam1={setTeam1} players2={players2} setPlayers2={setPlayers2} team2={team2} setTeam2={setTeam2} />
      <Table numberOfGames={numberOfGames} players1={players1} setPlayers1={setPlayers1} setPlayers2={setPlayers2} players2={players2}/>
      <Result />
    </div>
  );
}

export default App;
