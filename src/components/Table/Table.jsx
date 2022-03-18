import React from "react";
import "./Table.scss";
import { useState, useEffect } from "react";

export default function Table({
  players1,
  players2,
  setPlayers1,
  setPlayers2,
  numberOfGames,
}) {
  const [table, setTable] = useState([...players1, ...players2]);
  const [games, setGames] = useState([]);

  useEffect(() => {
    console.log(table);
    setTable([...players1, ...players2]);
  }, [players1, players2]);

  useEffect(() => {
    //table part
    let arrGames = [];
    for (let i = 0; i < numberOfGames; i++) {
      arrGames.push(`Game ${i + 1}`);
    }
    setGames(arrGames);
  }, [numberOfGames]);

  const handlePontuation = (point, indexPlayer, indexPoint) => {
    let tempArr = JSON.parse(JSON.stringify(table));
    tempArr[indexPlayer].pontuation[indexPoint] = point;
    setTable(tempArr);
  };

  const handleUpdate = () => {
    let tempArr = JSON.parse(JSON.stringify(table));
    tempArr.sort((a, b) =>
      a.pontuation.reduce(
        (total, currentElement) => Number(total) + Number(currentElement)
      ) >=
      b.pontuation.reduce(
        (total, currentElement) => Number(total) + Number(currentElement)
      )
        ? -1
        : 1
    );
    setTable(tempArr);
  };

  return (
    <div className="table">
      <h2>Table Management</h2>
      <table>
        <thead>
          <tr>
            <th>Team</th>
            <th>Player</th>
            {games.map((item, index) => {
              return <th key={index}>{item}</th>;
            })}
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {table.map((player, index) => {
            return (
              <tr key={index}>
                <td key={`${player.team} ${index}`}>{player.team}</td>
                <td key={player.name}>{player.name}</td>
                {games.map((game, i) => {
                  return (
                    <td key={game}>
                      <input
                        min={0}
                        max={20}
                        placeholder={0}
                        onChange={(e) =>
                          handlePontuation(e.target.value, index, i)
                        }
                        value={
                          player.pontuation[i] !== 0 && player.pontuation[i]
                        }
                        type="number"
                      />
                    </td>
                  );
                })}
                <td key={`${player.name} total`}>
                  {player.pontuation.length !== 0 &&
                    player.pontuation.reduce(
                      (total, currentElement) =>
                        Number(total) + Number(currentElement)
                    )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="update">
        <button onClick={() => handleUpdate()}>Update</button>
      </div>
    </div>
  );
}
