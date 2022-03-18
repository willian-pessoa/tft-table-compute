import React, { useState } from "react";
import "./Teams.scss";

// icons
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";
import { GrClose } from "react-icons/gr";

// components
import Team from "./Team";

export default function Teams({
  players1,
  players2,
  team1,
  team2,
  setPlayers1,
  setPlayers2,
  setTeam1,
  setTeam2,
  numberOfGames,
  setNumberOfGames,
}) {
  const [isActive, setIsActive] = useState(!false);

  const handleUpdate = () => {
    setIsActive((prev) => !prev);
  };

  const handleNumberGames = (amount) => {
    setNumberOfGames(amount);

    // update players
    let tempArr1 = JSON.parse(JSON.stringify(players1));
    let tempArr2 = JSON.parse(JSON.stringify(players2));
    tempArr1.forEach((item, index) => {
      let arrPontuation = new Array(amount);
      for (let i = 0; i < amount; ++i) arrPontuation[i] = 0;
      tempArr1[index].pontuation = [...arrPontuation];
    });
    tempArr2.forEach((item, index) => {
      let arrPontuation = new Array(amount);
      for (let i = 0; i < amount; ++i) arrPontuation[i] = 0;
      tempArr2[index].pontuation = [...arrPontuation];
    });
    console.log(tempArr1);
    console.log(tempArr2);
    setPlayers1(tempArr1);
    setPlayers2(tempArr2);
  };

  return (
    <div className={`Teams ${isActive && "active"}`}>
      <h1>Table Generator, Compute TFT Matchs</h1>
      <div className="mainContainer">
        <div className="teamsContainer">
          <Team
            idTeam={1}
            players={players1}
            team={team1}
            setPlayers={setPlayers1}
            setTeam={setTeam1}
            numberOfGames={numberOfGames}
          />
          <div className="divider">
            <GrClose />
          </div>
          <Team
            idTeam={2}
            players={players2}
            team={team2}
            setPlayers={setPlayers2}
            setTeam={setTeam2}
            numberOfGames={numberOfGames}
          />
        </div>
        <div className="numberGames">
          <h3>Number of Games:</h3>
          <input
            onKeyDown={(event) => {
              event.preventDefault();
            }}
            min="1"
            max="7"
            type="number"
            value={numberOfGames}
            onChange={(e) => handleNumberGames(e.target.value)}
          />
        </div>
      </div>
      <div onClick={() => handleUpdate()} className="arrows">
        {isActive ? (
          <MdOutlineKeyboardArrowUp />
        ) : (
          <MdOutlineKeyboardArrowDown />
        )}
      </div>
    </div>
  );
}
