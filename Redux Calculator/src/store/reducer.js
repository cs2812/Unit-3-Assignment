// import { CounterDe, CounterIn } from "./actionTpye";

import { CountAdd, CountDiv, CounterDe, CounterIn, CountMul, CountSub } from "./actionTpye"


export const reducer=(state,action)=>{
 switch(action.type){
     case CounterIn:{
         state.count++
         return {...state}
     }
     case CounterDe:{
         state.count--
         return {...state}
     }
     case CountAdd:{
        state.count=state.count+action.payload
        return {...state}
     }
     case CountSub:{
        state.count=state.count-action.payload
        return {...state}
     }
     case CountMul:{
        state.count=state.count*action.payload
        return {...state}
     }
     case CountDiv:{
        if(action.payload===0){
            alert("Can Not Divide by 0")
             
        }
        else{
        state.count=state.count/action.payload
        }
        return {...state}

     }
     default:{
         return state;
     }
 }
    
}