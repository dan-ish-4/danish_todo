import React, { useEffect, useState } from "react";
import './style.css';

const Useeffect = () => {
   //hooks--> used to manage use state

   const[myNum,setmyNum]=useState(0)
   useEffect(()=>{
       document.title=`chats(${myNum})`
       console.log("hiii")

   },);


  return (
    <>
      <div className="center_div">
        <p>{myNum}</p>
        <div className="button2" onClick={()=>setmyNum(myNum+1)}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          INCR
        </div>
        <div className="button2" onClick={()=>myNum >0?setmyNum(myNum-1):setmyNum(myNum)}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          DECR
        </div>
      </div>
    </>
  );
};

export default Useeffect;