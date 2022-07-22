import React, { useEffect, useReducer } from 'react'

export const Usereducer = () => {
    const initialdata=12;
     
    const reducer =(state,action)=>{
        if(action.type==="INCR"){
            state = state+1;
        }
        if( state>0 && action.type==="DECR"){
            state=state-1;
        }
        return state
    }

     const[state,dispatch]=useReducer(reducer,initialdata)
        useEffect(()=>{
            let para = document.getElementsByClassName("para")
            para= `clck[${state}]`;
            document.title = `chats[${state}]`
            // document.getElementsByClassName("para")= `click${state}`
        },)






  return (
    <>
     <div className="center_div">
         <p className='para'></p>
        <p>{state}</p>
        <div className="button2" onClick={()=>dispatch({type:"INCR"})}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          INCR
        </div>
        <div className="button2" onClick={()=>dispatch({type:"DECR"})} >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          DECR
        </div>
      </div>
    
    
    
    </>
  )
}
