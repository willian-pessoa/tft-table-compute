import React from "react";
import "./Team.scss";

import { AiOutlinePlusCircle } from "react-icons/ai";

export default function Team({ idTeam, team, setTeam, players, setPlayers, numberOfGames }) {
  const handleInputPlayer = (player, index) => {
    let tempArr = JSON.parse(JSON.stringify(players))
    tempArr[index].name = player;
    tempArr[index].team = team.name;
    tempArr[index].pontuation = Array(numberOfGames).fill(0);
    setPlayers(tempArr);
  };

  const handleAdd = () =>{
      setPlayers(prev=>[...prev, {name: "",team: team.name,pontuation:Array(numberOfGames).fill(0)}])
  }

  const handleTeam = (nameTeam) =>{
    setTeam({name:nameTeam, pontuation:0})
    let tempArr = JSON.parse(JSON.stringify(players))
    //console.log(tempArr)
    players.forEach((player,index)=>{
      tempArr[index].team=nameTeam;
    })
    setPlayers(tempArr)
  }

  return (
    <div className="team">
      <h2>Team {idTeam}</h2>
      <input
        placeholder="Team Tag"
        value={team.name}
        onChange={(e) => handleTeam(e.target.value)}
      />
      <h3>Players</h3>
      {players.map((player, index) => {
        return (
          <input
            key={index}
            value={player.name}
            placeholder={`player ${index + 1}`}
            onChange={(e) => handleInputPlayer(e.target.value, index)}
          />
        );
      })}
      <div onClick={()=>handleAdd()} className="add">
        <AiOutlinePlusCircle />
      </div>
    </div>
  );
}
