import React from "react";
import style from "./comp1.module.css";
import { useState } from "react";


let arr = ["", "", "", "", "", "", "", "", ""];
const Comp1 = () => {
  const [cardvalue, setCardValue] = useState(arr);
  const [turn, setturn] = useState("X");

  const checkWinner=(array)=>{
    let c=0;
    for(let i=0;i<array.length;i++){
        if(array[i]===""){
            c++;
        }
    }
    if(c===0){
        alert("Its a Tie")
        restart()
        return;

    }
      //col check
      for(let i=0;i<3;i++){
        if(array[0+i]===array[3+i]&&array[3+i]===array[6+i]){
            if(array[0+i]!==""&&array[3+i]!==""&&array[6+i]!==""){
                alert(array[0+i]+" is winner")
                restart()
                return;
            }
        }
      }
      //row check
      for(let i=0;i<7;i=i+3){
        if(array[0+i]===array[1+i]&&array[1+i]===array[2+i]){
            if(array[0+i]!==""&&array[1+i]!==""&&array[2+i]!==""){
                alert(array[0+i]+" is winner")
                restart()
                return;
            }
        }
      }
      //diagonal check
      if(array[0]===array[4]&&array[4]===array[8]){
          if(array[0]!==""&&array[4]!==""&&array[8]){
                alert(array[4]+" is Winner")
                restart()
                return;
          }
      }
      if(array[2]===array[4]&&array[4]===array[6]){
        if(array[2]!==""&&array[4]!==""&&array[6]){
            alert(array[4]+" is Winner")
            restart()
            return;
        }
    }
    
    
  }

  let displaycard = (i) => {
    if(arr[i]!==""){
        alert("already clicked")
        return;
    }
    
    
    if (turn === "0") {
      arr[i] = "X";
      setCardValue(arr);
    //   console.log(cardvalue);
      setturn("X");
    } else {
      // setCardValue([...cardvalue,"0"])
      arr[i] = "0";
      setCardValue(arr);
    //   console.log(cardvalue);
      setturn("0");
    }

    checkWinner(cardvalue)
   
      
     
  };

  const restart = () => {
    arr = ["", "", "", "", "", "", "", "", ""];
    setCardValue(arr);
  };
  return (
    <div>
      <h1>Tic-Tac-Toe</h1>

      <div className={style.col}>
        <div onClick={() => displaycard(0)} className={style.box1}>
          {cardvalue[0]}
        </div>
        <div onClick={() => displaycard(1)} className={style.box}>
          {cardvalue[1]}
        </div>
        <div onClick={() => displaycard(2)} className={style.box2}>
          {cardvalue[2]}
        </div>
      </div>
      
      <div className={style.col}>
        <div onClick={() => displaycard(3)} className={style.box1}>
          {cardvalue[3]}
        </div>
        <div onClick={() => displaycard(4)} className={style.box}>
          {cardvalue[4]}
        </div>
        <div onClick={() => displaycard(5)} className={style.box2}>
          {cardvalue[5]}
        </div>
      </div>
      <div className={style.col}>
        <div onClick={() => displaycard(6)} className={style.box11}>
          {cardvalue[6]}
        </div>
        <div onClick={() => displaycard(7)} className={style.boxdif}>
          {cardvalue[7]}
        </div>
        <div onClick={() => displaycard(8)} className={style.box22}>
          {cardvalue[8]}
        </div>
      </div>
      <button onClick={restart} className={style.btn}>Clear</button>
    </div>
  );
};

export default Comp1;
