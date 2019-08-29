import "./index.css";
import { measureCell } from "./routines/measureCell";

const CR = '\r'

const { cellWidth, cellHeight } = measureCell();

var canvas = document.getElementById("canvas");
const prompt = '$ '

canvas.width = 600;
canvas.height = 400;

var ctx = canvas.getContext("2d");
ctx.font = "16px monospace";

let globalBuffer = ''
let localBuffer = ''
let pos_X = 0;
let pos_Y = 0;
let length_X = Math.floor(canvas.width / cellWidth)
let length_Y = Math.floor(canvas.height / cellHeight)
console.log(length_X)

const print = string => {
  for (const char of string.split("")) {
    if (char === CR) {
      pos_X = 0;
      pos_Y += 1;
    } else {
      ctx.fillStyle = "#fff";
      ctx.fillText(char, cellWidth * pos_X, cellHeight * (pos_Y + 1));
      pos_X += 1;
    }
  }
  localBuffer += string
};

const println = string => {
  print(string + CR);
};

const deleteChar = (x, y) => {
  ctx.fillStyle = "#000";
  ctx.fillRect(x*cellWidth, y*cellHeight, cellWidth, cellHeight);
}

const handleCUB = () => {
  if (pos_X !== 0 && pos_Y !== 0)
}
const handleBS = () => deleteChar(pos_X, pos_Y)
const handleCR = () => print(CR)
const handleUnspecified = (ev) => {
  console.log(ev.keyCode)
  print(ev.key)
}

const getHandler = (ev) => {
  switch (ev.keyCode) {
    case 8:  return handleBS
    case 13: return handleCR
    default: return handleUnspecified
  }
}

const textarea = document.getElementById("textarea");
textarea.addEventListener("keydown", ev => {
  const handler = getHandler(ev)
  handler(ev)
});
