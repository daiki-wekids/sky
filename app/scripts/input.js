// input.js

//---------ボタン入力-----------

function NewGameClick() {
  initGame();
}

function LeftClick() {
  moveLeft();
}

function UpClick() {
  moveUp();
}

function DownClick() {
  moveDown();
}

function RightClick() {
  moveRight();
}

//---------キー入力-------------

document.onkeydown = function (e){
  if(!e) e = window.event;

  if(e.keyCode == 37){
    moveLeft();
  }
  if(e.keyCode == 38){
    moveUp();
  }
  if(e.keyCode == 40){
    moveDown();
  }
  if(e.keyCode == 39){
    moveRight();
  }
}