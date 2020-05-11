//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react";
import BottomRow from "./BottomRow";
import "./App.css";
// ```````````````````````Importing useState ^```````````````````````
// import React, { useState } from 'react'


function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  // ``````````````````````````useState Hooks below ```````````````````````
  const [homeScore, setHomeScore] = useState(0)
  const [awayScore, setAwayScore] = useState(0)

  // !!!!!!!Sprint !!!!!!!!!!!!!!!!!!!!!!!!
  const [timerBoard, setTimerBoard] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [quarters, setQuarters] =useState(0)
  // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  //``````````````````functionS using Set(Home/Away)Score````````````
  const homeTouchdown = event => {
    setHomeScore(homeScore + 7)
  }

  const homeGoal = event => {
    setHomeScore(homeScore + 3)
  }

  const awayTouchdown = event => {
    setAwayScore(awayScore + 7)
  }

  const awayGoal = event => {
    setAwayScore(awayScore + 3)
  }

  // !!!!!!!!!Sprint!!!!!!!!!!!!!!!!!!
  const nextQuarter = event => {
    if(quarters <4){
      setQuarters(quarters+1)
    }else{
      setQuarters(0)
    }
   
  }
  
  setTimeout(() => {
    setTimerBoard(timerBoard + 1)
    if(timerBoard === 60){
setMinutes(minutes + 1)
setTimerBoard(0)
    }else if(minutes > 15){
      setMinutes(0)
      setTimerBoard(0)
    }

    // if(quarters === 1){
    //   setMinutes(0)
    //   setTimerBoard(0)
    // }
  }, 1000)

  
  // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}
            <div className="home__score">{homeScore}</div>
          </div>
          {/* !!!!!!!!!!!!!!!!!!Sprint */}
  <div className="timer">`{minutes}:{timerBoard}`</div>
          {/* !!!!!!!!!!!!!!!!!!!!!! */}
          {/* <div className="timer">00:03</div> */}
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{awayScore}</div>
          </div>
        </div>
        <BottomRow quarter={quarters}/>
      </section>
      <section className="buttons">
        <div className="homeButtons">

          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          {/* ```````````````added onClick to each button ````````````````````` */}
          <button className="homeButtons__touchdown" onClick={homeTouchdown}>Home Touchdown</button>
          <button className="homeButtons__fieldGoal" onClick={homeGoal}>Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button className="awayButtons__touchdown" onClick={awayTouchdown}>Away Touchdown</button>
          <button className="awayButtons__fieldGoal" onClick={awayGoal}>Away Field Goal</button>
          {/* !!!!!!!!!!!!!!Sprint!!!!!!!!!!!!!!! */}
          <button onClick = {nextQuarter}>Next Quarter</button>
          {/* !!!!!!!!!!!!!!!!!!!!!!!!!! */}
        </div>
      </section>
    </div>
  );
}

export default App;


// `````````````````````trying out Sprint below ```````````````````
// function App(props){
//   const {teamName, amount} = props

//  const [teamScore, setTeamScore] = useState(0)

//  const doSomething = event => {
//   setTeamScore(teamScore + amount)
// }


// return (
//   <div className="container">
//   <section className="scoreboard">
//     <div className="topRow">
//       <div className="home">
//         <h2 className="home__name">Lambda</h2>


//         <div className="home__score">{0}</div>
//       </div>
//       <div className="timer">00:03</div>
//       <div className="away">
//         <h2 className="away__name">Omega</h2>
//         <div className="away__score">{0}</div>
//       </div>
//     </div>
//     <BottomRow />
//   </section>
//   <section className="buttons">
//     {/* <div className="homeButtons"> */}


//       <button className="TeamScores" onClick={doSomething}>TeamName Scores</button>
//       {/* <button className="homeButtons__fieldGoal" onClick={0}>Home Field Goal</button> */}
//     {/* </div> */}
//     {/* <div className="awayButtons">
//       <button className="awayButtons__touchdown" onClick={0}>Away Touchdown</button>
//       <button className="awayButtons__fieldGoal" onClick={0}>Away Field Goal</button>
//     </div> */}
//   </section>
// </div>
// );
// }


// export default App;

