import React, { useState } from 'react' 
 
const FuncComp = (props) => { 
 const [count , setCount]=useState(5); 
 const [status , setStatus]=useState(''); 
 
 const plus=()=>{ 
  setCount((count) => count +1) 
 }; 
 
 const minus=()=>{ 
  setCount((count) => count -1) 
 }; 
 
  return ( 
    <div> 
    <h2>Function Component</h2> 
    <h1>{count}</h1> 
    <button class="btn btn-outline-primary" onClick={plus}>+</button> 
    <button class="btn btn-outline-info" onClick={minus}>-</button> 
    <button class="btn btn-outline-danger" onClick={props.onKill}>kill</button> 
  </div> 
  ) 
} 
 
export default FuncComp