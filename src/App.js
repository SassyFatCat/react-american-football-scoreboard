//TODO: STEP 1 - Import the useState hook.
import React, {useState} from "react";
import BottomRow from "./BottomRow";
import "./App.css";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
const [tigerScore, setTigerScore] = useState(0);
const [lionScore, setLionsScore] = useState(0);
const [timer, setTimer] = useState({
  tens: 1,
  ones: 5,
  tenSec: 0,
  oneSec: 0,
  quarter: 3
});
let timerComp = () => {
// Timer
if (timer.tens === 0 && timer.ones === 0 && timer.tenSec === 0 && timer.oneSec === 0) {
  clearInterval(timerInterval)
}

else if (timer.ones === 0 && timer.tenSec === 0 && timer.oneSec === 0 && timer.tens > 0) {
setTimer({...timer, ones: 9, tens: timer.tens - 1, tenSec: 5, oneSec: 9});
}

else if (timer.tenSec === 0 && timer.oneSec === 0) {
setTimer({...timer, ones: timer.ones - 1, tenSec: 5, oneSec: 9})
}

else if (timer.oneSec === 0) {
setTimer({...timer, tenSec: timer.tenSec - 1, oneSec: 9});
}

else {
setTimer({...timer, oneSec: timer.oneSec - 1})
}
}
let timerInterval = setTimeout(timerComp, 1000);


  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>
            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}
            <div className="home__score">{lionScore}</div>
          </div>
          <div className="timer">{timer.tens}{timer.ones}:{timer.tenSec}{timer.oneSec}</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{tigerScore}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">

          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button className="homeButtons__touchdown" onClick={() => setLionsScore(lionScore + 7)}>Home Touchdown</button>
          <button className="homeButtons__fieldGoal" onClick={() => setLionsScore(lionScore + 3)}>Home Field Goal</button>
        </div>
        <div><button>Start</button></div>
        <div className="awayButtons">
          <button className="awayButtons__touchdown" onClick={() => setTigerScore(tigerScore + 7)}>Away Touchdown</button>
          <button className="awayButtons__fieldGoal" onClick={() => setTigerScore(tigerScore + 3)}>Away Field Goal</button>
        </div>
      </section>
    </div>
  );
}

export default App;
