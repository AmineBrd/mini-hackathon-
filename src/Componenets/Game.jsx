import React from 'react'
import { useState } from 'react';

function Game() {
  const [color,setColor] = useState("black")
let canvas = document.querySelector("canvas")
let ctx = canvas.getContext("2d")
let drawing,prevX,prevY;
ctx.addEventListener("mousedown",()=>{drawing = true})
ctx.addEventListener("mouseup",()=>{drawing = true})
ctx.addEventListener("mousemove",(e)=>{
	 if(!drawing){
		prevX = e.clientX;
		prevY = e.clientY;
}else{
	ctx.beginpath();
	ctx.lineWidth = "5px";
	ctx.moveTo(prevX,prevY)
	ctx.lineTo(e.clientX,e.clientY)
	ctx.stroke();
	prevX = e.clientX;
	prevY = e.clientY;
}})
  return (
    <div className="game">
      
      <div>
      <canvas></canvas>
      </div>
    </div>
  )
}

export default Game