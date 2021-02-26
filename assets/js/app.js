// We need to import the CSS so that webpack will load it.
// The MiniCssExtractPlugin is used to separate it out into
// its own CSS file.
import '../css/app.scss';
import 'mini.css';

// webpack automatically bundles all modules in your
// entry points. Those entry points can be configured
// in "webpack.config.js".
//
// Import deps with the dep name or local files with a relative path, for example:
//
//     import {Socket} from "phoenix"
//     import socket from "./socket"
//
import "phoenix_html"

import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

import { test_guess } from './game';
import { ch_join, ch_push, ch_reset, ch_login } from './socket';

// The format of a seprate screen and the passing of the reset function in through 
// the GameLost and GameWon functions were formats taken from class
function GameLost(r) {
  let { reset } = r;
  return (
    <div className="App">
      <h1>You Lost!</h1>
      <h3>Try again?</h3>
      <p>
        <button class="tertiary" onClick={reset}>
          New Game
        </button>
      </p>
    </div>
  );
}

function GameWon(r) {
  let { reset } = r;
  return (
    <div className="App">
      <h1>You Won!</h1>
      <h3>Play again?</h3>
      <p>
        <button class="tertiary" onClick={reset}>
          New Game
        </button>
      </p>
    </div>
  );
}

function reset() {
  ch_reset();
}

function Controls({ guess, reset }) {

  // the text useState item is from lecture
  const [text, setText] = useState("");

  // the following 4 lines of code are from lecture
  function updateText(ev) {
    let vv = ev.target.value;
    let cc = vv[vv.length - 1];
    if (!isNaN(cc) || vv === "") {
      setText(vv);
    }
  }

  function go_guess() {
    if (test_guess(text)) {
      guess(text);
    }
    setText("");
  }

  function keyPress(ev) {
    if (ev.key == "Enter") {
      go_guess();
    }
  }


  return (
    <div className="App">
      <button class="secondary" onClick={() => ch_login("", "")}>EXIT</button>
      <h1>Bulls and Cows</h1>
      <p>Guess the four-digit number. More information on the game&nbsp;
       <a href="https://en.wikipedia.org/wiki/Bulls_and_Cows" rel="noreferrer" target="_blank">here</a>
        .
      </p>
      <p>
        Input:&nbsp;
        <input type="text"
          value={text}
          onChange={updateText}
          onKeyPress={keyPress} />
        <button class="inverse" onClick={go_guess}>OK</button>
      </p>
    </div>
  );
}

function Guesses({ state }) {

  let { guesses, results, name, room } = state;

  const items = []

  for (let i = 0; i < guesses.length; i++) {
    items.push(
      <tr>
        <td data-label="Count">{i + 1}</td>
        <td data-label="User">{name}</td>
        <td data-label="Guess">{guesses[i]}</td>
        <td data-label="Result">{results[i]}</td>
      </tr>)
  }

  let body = (
    <table max-height="800px">
      <thead>
        <tr>
          <th></th>
          <th>Player</th>
          <th>Guess</th>
          <th>Result</th>
        </tr>
      </thead>
      <tbody>{items}</tbody>
    </table>
  );

  return (
    <div>
      {body}
    </div>
  )

}


function Play({ state }) {

  let { guesses, results, name, room } = state;

  function guess(text) {
    ch_push({ letter: text });
  }

  return (
    <div>
      <Controls reset={reset} guess={guess} />
      <Guesses state={state} />
      <button onClick={reset}>New Game</button>
    </div>
  )
}

function App() {

  const [state, setState] = useState({
    room: "",
    name: "",
    guesses: [],
    results: [],
  })

  // this function is from lecture
  useEffect(() => {
    ch_join(setState);
  });



  let body = null;

  if (state.name === "") {
    body = <Login />;
  }
  else if (state.results[state.results.length - 1] == "4B0C") {
    body = <GameWon reset={(reset)} />;
  }
  else {
    body = <Play state={state} />;
  }

  return (
    <div className="container">
      {body}
    </div>
  );
}

//login function based on login function used in class
function Login() {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  return (
    <div className="row">
      <div className="column">
        <div className="row">
          <div className="column">
            <input type="text" placeholder="enter game name"
              value={room}
              onChange={(ev) => setRoom(ev.target.value)} />
          </div>
          <div className="column">
            <input type="text" placeholder="enter username"
              value={name}
              onChange={(ev) => setName(ev.target.value)} />
          </div>
        </div>
      </div>
      <div className="column">
        <button onClick={() => ch_login(name, room)} >
          Ready
        </button>
      </div>
    </div>
  );
}

function Waiting({ name, room }) {

  return (
    <div className="row">
      <div className="column">
        <div className="row">
          <label>
            <Checkbox/>
            <span>Check to become an Observer!</span>
          </label>
        </div>
      </div>
      <div className="column">
        <button onClick={() => ch_login(name, room)}>
          Ready
        </button>
      </div>
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);