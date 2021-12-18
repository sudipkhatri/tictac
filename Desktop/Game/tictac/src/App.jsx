import './App.css';
import SquareBox from './SquareBox';
import { useState, useEffect } from 'react';
const initialState = ["", "", "", "", "", "", "", "", ""]

function App() {
  const[status, updateStatus] = useState(initialState);
  const[playerX, updatePlayerX] = useState(false)
  const stateClicked = (index) =>{
    let strings = Array.from(status);
    strings[index] = playerX ? 'X' : 'O';
    updateStatus(strings);
    updatePlayerX(!playerX)

  }
useEffect(()=>{
  const winner = calculateWinner();
  if(winner){
    alert(`player ${winner} Wins`);
    updateStatus(initialState);
  }

  //updateStatus(initialState)
}, status)

function calculateWinner() {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (status[a] && status[a] === status[b] && status[a] === status[c]) {
      return status[a];
    }
  }
  return null;
}
  return (
    <div className="App-container">
      <h1> Tic Tac Toe By Sudip Khatri</h1>

      <div className = 'row'>
        <div className='col'>
          <SquareBox  state = {status[0]} onClick = {()=>stateClicked(0)}/>
          <SquareBox state = {status[1]} onClick = {()=>stateClicked(1)}/>
          <SquareBox state = {status[2]} onClick = {()=>stateClicked(2)}/>
        </div>
        <div className='col'>
          <SquareBox state = {status[3]} onClick = {()=>stateClicked(3)}/>
          <SquareBox state = {status[4]} onClick = {()=>stateClicked(4)}/>
          <SquareBox state = {status[5]} onClick = {()=>stateClicked(5)}/>
        </div>
        <div className='col'>
          <SquareBox state = {status[6]} onClick = {()=>stateClicked(6)}/>
          <SquareBox state = {status[7]} onClick = {()=>stateClicked(7)}/>
          <SquareBox state = {status[8]} onClick = {()=>stateClicked(8)}/>
        </div>
      </div>
      <button onClick={()=>updateStatus(initialState)} > Clear </button>
    </div>
  );
}

export default App;
