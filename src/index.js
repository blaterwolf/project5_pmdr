import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import Tomato from "./Tomato";
import Footer from "./Footer";
import useInterval from "./useInterval";
const audio = document.getElementById("beep");

const controlList = [
  {
    controlClass: "main-control",
    idLabel: ["break-label", "session-label"],
    labelText: ["Break Length", "Session Length"],
    idButtonDecrement: ["break-decrement", "session-decrement"],
    classButton: "btn-class",
    value: ["-", "+"],
    idLength: ["break-length", "session-length"],
    idButtonIncrement: ["break-increment", "session-increment"],
  },
];

const Controls = ({
  controlClass,
  idLabel,
  labelText,
  idButtonDecrement,
  classButton,
  value,
  idLength,
  idButtonIncrement,
  breakState,
  sessionState,
  handleDecrement,
  handleIncrement,
}) => {
  return (
    <div className={controlClass}>
      <div id={idLabel} className={idLabel}>
        {labelText}
      </div>
      <button
        id={idButtonDecrement}
        className={classButton}
        value={value[0]}
        onClick={handleDecrement}
      >
        <i className="fas fa-minus"></i>
      </button>
      <div id={idLength} className={classButton}>
        {idLength === "break-length" ? breakState : sessionState}
      </div>
      <button
        id={idButtonIncrement}
        className={classButton}
        value={value[1]}
        onClick={handleIncrement}
      >
        <i className="fas fa-plus"></i>
      </button>
    </div>
  );
};

const Pomodoro = () => {
  const [breakState, setBreakState] = useState(5);
  const [sessionState, setSessionState] = useState(25);
  const [currentTime, setCurrentTime] = useState(25 * 60);
  const [title, setTitle] = useState("Session");
  const [isPlaying, setIsPlaying] = useState(false);
  const [sessionCount, setSessionCount] = React.useState(1);

  useInterval(
    () => {
      if (currentTime === 0) {
        setTitle(title === "Session" ? "Break" : "Session");
        setCurrentTime(
          title === "Session" ? breakState * 60 : sessionState * 60
        );
        setSessionCount((prevCount) =>
          title === "Session" ? prevCount + 1 : prevCount
        );
        audio.play();
      } else {
        setCurrentTime(currentTime - 1);
      }
    },
    isPlaying ? 1000 : null
  );

  const handlePlayPause = () => {
    if (isPlaying) {
      setIsPlaying(false);
    } else {
      setIsPlaying(true);
    }
  };

  const convertTime = (count) => {
    let minutes = Math.floor(count / 60);
    let seconds = count % 60;
    return `${minutes < 10 ? "0" + minutes : minutes}:${
      seconds < 10 ? "0" + seconds : seconds
    }`;
  };

  const handleReset = () => {
    setBreakState(5);
    setSessionState(25);
    setCurrentTime(25 * 60);
    setTitle("Session");
    setIsPlaying(false);
    setSessionCount(1);
    audio.pause();
    audio.currentTime = 0;
  };

  const handleChange = (value, type) => {
    let newValue;
    if (type === "Session") {
      newValue = sessionState + value;
    } else {
      newValue = breakState + value;
    }
    if (newValue > 0 && newValue < 61 && !isPlaying) {
      type === "Break" ? setBreakState(newValue) : setSessionState(newValue);
      if (title === type) {
        setCurrentTime(newValue * 60);
      }
    }
  };

  return (
    <>
      <Tomato />
      <div id="pomodoro-title" className="pomodoro-title">
        Pomodoro Clock
      </div>
      {controlList.map(
        ({
          controlClass,
          idLabel,
          labelText,
          idButtonDecrement,
          classButton,
          value,
          idLength,
          idButtonIncrement,
        }) => (
          <div className="main-container-class">
            <Controls
              controlClass={controlClass}
              idLabel={idLabel[0]}
              labelText={labelText[0]}
              idButtonDecrement={idButtonDecrement[0]}
              classButton={classButton}
              value={value}
              idLength={idLength[0]}
              idButtonIncrement={idButtonIncrement[0]}
              breakState={breakState}
              handleDecrement={() => handleChange(-1, "Break")}
              handleIncrement={() => handleChange(1, "Break")}
            />
            <Controls
              controlClass={controlClass}
              idLabel={idLabel[1]}
              labelText={labelText[1]}
              idButtonDecrement={idButtonDecrement[1]}
              classButton={classButton}
              value={value}
              idLength={idLength[1]}
              idButtonIncrement={idButtonIncrement[1]}
              sessionState={sessionState}
              handleDecrement={() => handleChange(-1, "Session")}
              handleIncrement={() => handleChange(1, "Session")}
            />
          </div>
        )
      )}
      <div className="timer-border">
        <div className="timer-wrapper">
          <h2 id="timer-label">
            {title === "Session" ? `${title} ${sessionCount}` : `${title}`}
          </h2>
          <div id="time-left" className="time-left">
            {convertTime(currentTime)}
          </div>
        </div>
        <div className="controls-timer">
          <button id="start_stop" onClick={handlePlayPause}>
            <i className={`fas fa-${isPlaying ? "pause" : "play"}`}></i>
          </button>
          <button id="reset" onClick={handleReset}>
            <i className="fas fa-sync" />
          </button>
        </div>
      </div>
    </>
  );
};

const rootElement = document.getElementById("root");

ReactDOM.render(
  <React.StrictMode>
    <Pomodoro />
    <Footer />
  </React.StrictMode>,
  rootElement
);
