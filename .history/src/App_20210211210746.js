import "./App.css";
import GameBox from "./components/GameBox/GameBox";
import age from "./images/age.jpeg";
import av from "./images/av.jpeg";
import hq from "./images/hq.png";
import hs from "./images/hs.png";
import jq from "./images/jq.jpg";
import lk from "./images/lk.jpg";
import sm from "./images/sm.jpg";
import smm from "./images/smm.png";
import knight from "./images/knight.png";

const App = () => {
  Array.prototype.shuffle = function (arr) {
    let m = this.length,
      i;
    while (m) {
      i = (Math.random() * m--) >>> 0;
      [this[m], this[i]] = [this[i], this[m]];
    }
    return this;
  };
  const shuffleArray = [age, av, hq, hs, jq, lk, sm, smm, knight].shuffle();
  const shuff = () => {
    shuffleArray.shuffle();
  };
  return (
    <div className="App">
      <header className="App-header">Game by Ra</header>
      <GameBox shuff={shuff} shuffleArray={shuffleArray}></GameBox>
    </div>
  );
};

export default App;
