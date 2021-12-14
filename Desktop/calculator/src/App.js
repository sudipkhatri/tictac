import './App.css';
import * as math from 'mathjs';
import { useState } from 'react';
import Button from './Components/Button'
import Input from './Components/Input'

const App = () => {
  const [result, setResult] = useState("");
  const [text, setText] = useState("");
  const mergeAllToText = (val) =>{
    setText((Text) =>[...text, val + " "])
  }
  const clearAll = () =>{
    setResult(" ")
    setText(" ")
  }
  const calculateResult = ()=>{
    const input = text.join("") // removes all commas
    
    setResult(math.evaluate(input));
  }
  return (

    <div className="App">
      <div className='cal-wrapper'>
        <Input result = {result} text = {text}/>
        <div className='row'>
          <Button symbol = "7" handleClick={mergeAllToText}/>
          <Button symbol = "8" handleClick={mergeAllToText}/>
          <Button symbol = "9" handleClick={mergeAllToText}/>
          <Button symbol = "/" colors = "cornflowerblue" handleClick={mergeAllToText}/>
        </div>
        <div className='row'>
          <Button symbol = "4" handleClick={mergeAllToText}/>
          <Button symbol = "5" handleClick={mergeAllToText}/>
          <Button symbol = "6" handleClick={mergeAllToText}/>
          <Button symbol = "*" colors = "cornflowerblue" handleClick={mergeAllToText}/>
        </div>
        <div className='row'>
          <Button symbol = "1" handleClick={mergeAllToText}/>
          <Button symbol = "2" handleClick={mergeAllToText}/>
          <Button symbol = "3" handleClick={mergeAllToText}/>
          <Button symbol = "+" colors = "cornflowerblue" handleClick={mergeAllToText}/>
        </div>
        <div className='row'>
          <Button symbol = "0" handleClick={mergeAllToText}/>
          <Button symbol = "." handleClick={mergeAllToText}/>
          <Button symbol = "-" handleClick={mergeAllToText}/>
          <Button symbol = "=" colors = "cornflowerblue" handleClick={calculateResult}/>
        </div>
        <div className='row'>
          <Button symbol = "Clear" colors = "cornflowerblue" handleClick = {clearAll}/>
        </div>
      </div>
    </div>
  );
}

export default App;
