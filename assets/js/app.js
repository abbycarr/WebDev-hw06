// // We need to import the CSS so that webpack will load it.
// // The MiniCssExtractPlugin is used to separate it out into
// // its own CSS file.
// import '../css/app.scss';
// import 'mini.css';

// // webpack automatically bundles all modules in your
// // entry points. Those entry points can be configured
// // in "webpack.config.js".
// //
// // Import deps with the dep name or local files with a relative path, for example:
// //
// //     import {Socket} from "phoenix"
// //     import socket from "./socket"
// //
// import "phoenix_html"

// import React, { useState, useEffect } from 'react';
// import ReactDOM from 'react-dom';

// import { test_guess } from './game';
// import { ch_join, ch_push, ch_reset } from './socket';

// // The format of a seprate screen and the passing of the reset function in through 
// // the GameLost and GameWon functions were formats taken from class
// function GameLost(r) {
//   let { reset } = r;
//   return (
//     <div className="App">
//       <h1>You Lost!</h1>
//       <h3>Try again?</h3>
//       <p>
//         <button class="tertiary" onClick={reset}>
//           New Game
//         </button>
//       </p>
//     </div>
//   );
// }

// function GameWon(r) {
//   let { reset } = r;
//   return (
//     <div className="App">
//       <h1>You Won!</h1>
//       <h3>Play again?</h3>
//       <p>
//         <button class="tertiary" onClick={reset}>
//           New Game
//         </button>
//       </p>
//     </div>
//   );
// }

// function Controls({ guess, reset }) {

//   // the text useState item is from lecture
//   const [text, setText] = useState("");

//   // the following 3 lines of code are from lecture
//   function updateText(ev) {
//     let vv = ev.target.value;
//     let cc = vv[vv.length - 1];
//     if (!isNaN(cc) || vv === "") {
//       setText(vv);
//     }
//   }


//   function go_guess() {
//     if (test_guess(text)) {
//       guess(text);
//     }
//   }

//   function keyPress(ev) {
//     if (ev.key == "Enter") {
//       go_guess();
//     }
//   }

//   return (
//     <div className="App">
//       <h1>Bulls and Cows</h1>
//       <p>Guess the four-digit number. More information on the game&nbsp;
//        <a href="https://en.wikipedia.org/wiki/Bulls_and_Cows" rel="noreferrer" target="_blank">here</a>
//         .
//       </p>
//       <p>
//         Input:&nbsp;
//         <input type="text"
//           value={text}
//           onChange={updateText}
//           onKeyPress={keyPress} />
//         <button class="inverse" onClick={go_guess}>OK</button>
//       </p>
//     </div>
//   );
// }


// function App() {

//   const [state, setState] = useState({
//     guesses: [],
//     results: [],
//   })

//   let { guesses, results } = state;

//   let turns = 8 - guesses.length;

//   // this function is from lecture
//   useEffect(() => {
//     ch_join(setState);
//   });

//   function guess(text) {
//     ch_push({ letter: text });
//   }

//   function reset() {
//     ch_reset();
//   }

//   let body = null;

//   if (results[results.length - 1] == "4B0C") {
//     body = <GameWon reset={(reset)} />;
//   }
//   else if (turns > 0) {
//     body = (
//       <div>
//         <Controls reset={reset} guess={guess} />
//         <table max-height="800px">
//           <thead>
//             <tr>
//               <th></th>
//               <th>Guess</th>
//               <th>Result</th>
//             </tr>
//           </thead>
//           <tbody>
//             <tr>
//               <td data-label="Count">1</td>
//               <td data-label="Guess">{guesses[0]}</td>
//               <td data-label="Result">{results[0]}</td>
//             </tr>
//             <tr>
//               <td data-label="Count">2</td>
//               <td data-label="Guess">{guesses[1]}</td>
//               <td data-label="Result">{results[1]}</td>
//             </tr>
//             <tr>
//               <td data-label="Count">3</td>
//               <td data-label="Guess">{guesses[2]}</td>
//               <td data-label="Result">{results[2]}</td>
//             </tr>
//             <tr>
//               <td data-label="Count">4</td>
//               <td data-label="Guess">{guesses[3]}</td>
//               <td data-label="Result">{results[3]}</td>
//             </tr>
//             <tr>
//               <td data-label="Count">5</td>
//               <td data-label="Guess">{guesses[4]}</td>
//               <td data-label="Result">{results[4]}</td>
//             </tr>
//             <tr>
//               <td data-label="Count">6</td>
//               <td data-label="Guess">{guesses[5]}</td>
//               <td data-label="Result">{results[5]}</td>
//             </tr>
//             <tr>
//               <td data-label="Count">7</td>
//               <td data-label="Guess">{guesses[6]}</td>
//               <td data-label="Result">{results[6]}</td>
//             </tr>
//             <tr>
//               <td data-label="Count">8</td>
//               <td data-label="Guess">{guesses[7]}</td>
//               <td data-label="Result">{results[7]}</td>
//             </tr>
//           </tbody>
//         </table>
//         <button onClick={reset}>New Game</button>
//       </div>
//     )
//   }
//   else {
//     body = <GameLost reset={reset} />;
//   }

//   return (
//     <div className="container">
//       {body}
//     </div>
//   );
// }

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function Demo(_) {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <p><button onClick={() => setCount(count + 1)}>+1</button></p>
    </div>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <Demo />
  </React.StrictMode>,
  document.getElementById('root')
);