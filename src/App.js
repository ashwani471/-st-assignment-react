import React, { useState } from 'react';


const App=()=>{
  const [number, setNumber]=useState(0);
   
const increament=()=>{
setNumber(number+1);
};

const decreament=()=>{
  if(number>0){
  setNumber(number-1);
}else{
  setNumber(0);
}
}
  return(
    <>
    <div className="main-div">
    <div className="inner-div">
      <h1 className="NUmber">{number}</h1>
      <br />
      <button className="Increament" onClick={increament}>Inc</button>
      <button className="Decreament" onClick={decreament}>Dec</button>
    </div>
    </div>
    </>
  );
}

export default App;