import React, {useState} from 'react';
import "./Result.scss";

export default function Result({
  players1,
  players2,
  team1,
  team2,
  setTeam1,
  setTeam2,
}) {
  const [isActive, setIsActive] = useState(false);

  const handleResult = () =>{
    // SHOW PAGE
    setIsActive(prev=>!prev);

    // Compute team pontuation
    // Team 1
    let pointsT1 = [0,0,0];
    players1.forEach((player,index)=>{
      pointsT1.forEach((points,i)=>{
        pointsT1[i] = points + Number(player.pontuation[i])
      })
    })
    pointsT1.push(pointsT1.reduce((total, currentElement) => Number(total) + Number(currentElement)))
    let pointsT2 = [0,0,0];
    players2.forEach((player,index)=>{
      pointsT2.forEach((points,i)=>{
        pointsT2[i] = points + Number(player.pontuation[i])
      })
    })
    pointsT2.push(pointsT2.reduce((total, currentElement) => Number(total) + Number(currentElement)))


    setTeam1(prev=>({...prev,pontuation:pointsT1}))
    setTeam2(prev=>({...prev,pontuation:pointsT2}))
  }

  return (
    <div className={`result ${isActive && "active"}`}>
      <div onClick={()=>handleResult()} className="btnResult">
        {!isActive ? <h3>Check Result</h3> : <h3>Return</h3>}
      </div>
      <h3>{team1.name + " " + team1.pontuation + " " }</h3>
      <h3>{team2.name + " " + team2.pontuation + " " }</h3>
     </div>
  )
}
