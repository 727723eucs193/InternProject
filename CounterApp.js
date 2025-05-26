import React, { useState } from "react";
function CounterApp(){
    const[count,setCount]=useState(0);
    const increment = () =>{setCount(prev => prev+1)};
    const Decrement = () => {setCount(prev =>prev-1)};
    const reset = () =>{setCount(0)};
   
    return(
       <div className="styling">
       <div style={{border:'9px  black',padding:'100px',margin:'430px',textAlign:'center',borderRadius:'5px',boxShadow:'9px light black',background:'#1887ab'}}>
          <h1 style={{margin:'10px'}}>COUNTER APP</h1>
          <h2>COUNT:{count}</h2>
          <div>
            <button onClick={increment} style={{margin:'20px',background:'#5d9db9',padding:'5px',borderRadius:'6px',border:'1px'}}>Increment</button><br></br>
            <button onClick={Decrement}style={{margin:'20px',background:'#5d9db9',padding:'5px',borderRadius:'6px',border:'1px'}}>Decrement</button><br/>
            <button onClick={reset} style={{margin:'20px',background:'#5d9db9',padding:'5px',borderRadius:'6px',border:'1px'}}>Reset</button><br/>
          </div>
       </div>
      </div>
    )
}
export default CounterApp;
