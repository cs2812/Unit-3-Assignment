import { CountAdd, CountDiv, CounterDe, CounterIn, CountMul, CountSub } from "./actionTpye";

export const add=()=>({type:CounterIn});
export const minus=()=>({type:CounterDe})

export const Addition=(x)=>({type:CountAdd,payload:x})
export const Subtraction=(x)=>({type:CountSub,payload:x})
export const Multiply=(x)=>({type:CountMul,payload:x})
export const Divide=(x)=>({type:CountDiv,payload:x})







