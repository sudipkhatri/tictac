import React from 'react';
import { useState } from 'react';
import './Calc.css'

export default function Calculator(){
    const [cal, setCal] = useState("")
    const [result, setResult] = useState("")

    const ops = ['/', '*', '+', '-', '.']

    const updatecalc = value =>{
        if(
            ops.includes(value) && cal === '' ||
            ops.includes(value) && ops.includes(cal.slice(-1))
        ){
            return;
        }
        setCal(cal + value)
        if(!ops.includes(value)){
            setResult(eval(cal + value).toString());
        }
    }

    const createDigits = () =>{
        const digits = [];
        for(let i = 1; i<10; i++){
            digits.push(<button onClick={()=>updatecalc(i.toString())}key={i}> {i} </button>)
        }
        return digits;
    }
    const calculate = ()=>{
        setCal(eval(cal).toString());
    }
    const deleteLast = () =>{
        if(cal === ''){
            return;
        }
        const value = cal.slice(0, -1);
        setCal(value);
    }

    const clearAll = () =>{
        setResult("")
        setCal("")
    }
    return (
        <div className = 'App'>
            <div className= 'calculator'>
            <div className= 'display'>
                {result ? <span> {result} </span>: "" }
                {cal || 0}
            </div>
            <div className='operators'>
                <button onClick={()=>updatecalc('/')}> / </button>
                <button onClick={()=>updatecalc('*')}> *  </button>
                <button onClick={()=>updatecalc('+')}>  + </button>
                <button onClick={()=>updatecalc('-')}> - </button>
                <button onClick={deleteLast}> DEL </button>
            </div>
            <div className = 'digits'>
                {createDigits()}
                <button onClick={()=>updatecalc('0')}> 0 </button>
                <button onClick={()=>updatecalc('.')}> . </button>
                <button onClick={calculate}> = </button>
            </div>
            <div className='row'>
            <button onClick={clearAll}> Clear</button>
            </div>
            </div>
        </div>
    )
}