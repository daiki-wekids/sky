// config.js
// ゲーム内で使用する設定値(定数)を決める

let win = false;

let winB = false;

let lose = false;

let score = 0;

//let bestScoreInLocalStorage = parseInt(localStorage.getItem("2048bestscore"));
//let bestScore = bestScoreInLocalStorage ? bestScoreInLocalStorage : 0;

const boardSize = 16;	// ボードのマス数

const addTileNum = 2;	//　ゲーム開始時に生成されるタイル数

const maxTile = 7;	//　タイルの最大値　これができるとwin

let cantMove = 0;

let cantMoveB = 0;

let moved = false;

let turn = 0;
