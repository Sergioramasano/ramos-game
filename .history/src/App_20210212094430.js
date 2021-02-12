import "./App.css";
import { shuffle } from "./Shuffle";
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
  shuffle();
  let shuffleArray = [age, av, hq, hs, jq, lk, sm, smm, knight];
  shuffleArray = [...shuffleArray, ...shuffleArray].shuffle();
  const mappingUrls = (urls) => {
    urls = urls.map((url, idx) => {
      return { name: url, id: Math.random(), visible: false, idx };
    });
  };

  mappingUrls(shuffleArray);

  const shuff = () => {
    shuffleArray.shuffle();
  };
  return (
    <div className="App">
      <header className="App-header">Game by Ra</header>
      <GameBox shuff={shuff} shuffleArray={mappingUrls}></GameBox>
    </div>
  );
};

export default App;
