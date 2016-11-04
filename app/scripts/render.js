// render.js
// fieldの情報を実際に画面に書き出す処理

function render() {
	for (let i = 0; i < grid.length; i++) {
		if ( grid[i] > 10000  ){
			grid[i] = grid[i] % 10000;　//10000で割ったあまりを出力する
		}
	}
	// gridB
	for (let i = 0; i < gridB.length; i++) {
		if ( gridB[i] > 10000  ){
			gridB[i] = gridB[i] % 10000;　//10000で割ったあまりを出力する
		}
	}

	for (let i = 0; i < grid.length; i++) {
		if (i <= 11) {
			if (grid[i] !== 0 && grid[i] !== grid[i + 4] && grid[i + 4] !== 0) {
				cantMove = cantMove + 1;
			}
		}
		if (i % 4 !== 3) {
			if (grid[i] !== 0 && grid[i] !== grid[i + 1] && grid[i + 1] !== 0) {
				cantMove = cantMove + 1;
			}
		}
	}

	if (cantMove >= 24) {
		//lose = true;
		winB = true;
	}

	for (let i = 0; i < grid.length; i++) {
		if (i <= 11) {
			if (gridB[i] !== 0 && gridB[i] !== gridB[i + 4] && gridB[i + 4] !== 0) {
				cantMoveB = cantMoveB + 1;
			}
		}
		if (i % 4 !== 3) {
			if (gridB[i] !== 0 && gridB[i] !== gridB[i + 1] && gridB[i + 1] !== 0) {
				cantMoveB = cantMoveB + 1;
			}
		}
	}

	if (cantMove >= 24) {
		//lose = true;
		win = true;
	}

	for (let i = 0; i < grid.length; i++) {
		let tileTarget = document.getElementsByClassName("grid-cell");

    if(grid[i] != 0){
      tileTarget[i].innerHTML = grid[i];
			if(grid[i] === 1){
			tileTarget[i].style.background = '#eee4da';
			}
			if(grid[i] === 2){
			tileTarget[i].style.background = '#ede0c8';
			}
			if(grid[i] === 3){
			tileTarget[i].style.background = '#f2b179';
			}
			if(grid[i] === 4){
			tileTarget[i].style.background = '#f59563';
			}
			if(grid[i] === 5){
			tileTarget[i].style.background = '#f67c5f';
			}
			if(grid[i] === 6){
			tileTarget[i].style.background = '#f65e3b';
			}
			if(grid[i] === 7){
			tileTarget[i].style.background = '#edcf72';
			tileTarget[i].style.color = 'red';
			}
			if(grid[i] === 8){
			tileTarget[i].style.background = '#edcc61';
			}
		}
      else if (grid[i] ===0){
       tileTarget[i].innerHTML = " ";
			 tileTarget[i].style.background = '#66cc99';
    }
	}

	for (let i = 0; i < gridB.length; i++) {
		let tileTargetB = document.getElementsByClassName("grid-cellB");

		if(gridB[i] != 0){
      tileTargetB[i].innerHTML = gridB[i];
			if(gridB[i] === 1){
			tileTargetB[i].style.background = '#eee4da';
			}
			if(gridB[i] === 2){
			tileTargetB[i].style.background = '#ede0c8';
			}
			if(gridB[i] === 3){
			tileTargetB[i].style.background = '#f2b179';
			}
			if(gridB[i] === 4){
			tileTargetB[i].style.background = '#f59563';
			}
			if(gridB[i] === 5){
			tileTargetB[i].style.background = '#f67c5f';
			}
			if(gridB[i] === 6){
			tileTargetB[i].style.background = '#f65e3b';
			}
			if(gridB[i] === 7){
			tileTargetB[i].style.background = '#edcf72';
			tileTargetB[i].style.color = 'red';
			}
			if(gridB[i] === 8){
			tileTargetB[i].style.background = '#edcc61';
			}
		}
      else if (gridB[i] ===0){
       tileTargetB[i].innerHTML = " ";
			 tileTargetB[i].style.background = '#6699cc';
    }
	}

/*
	if (score > bestScore) {
		bestScore = score;
		localStorage.setItem("2048bestscore", bestScore);
	}
*/

	/*
	else {
		let winOrLoseTarget = document.getElementsByClassName("winOrLose");
		winOrLoseTarget[0].innerHTML = "cantMove" + cantMove;
	}

	let scoreTarget = document.getElementsByClassName("score-container");
	scoreTarget[0].innerHTML = score;

	let bestScoreTarget = document.getElementsByClassName("best-container");
	bestScoreTarget[0].innerHTML = bestScore;
	*/

	let turnTarget = document.getElementsByClassName("turn-container");
	turnTarget[0].innerHTML = turn;

	if (turn % 2 === 1) {
		let turnA = document.getElementsByClassName("turnA");
		turnA[0].innerHTML = " ";
		let turnB = document.getElementsByClassName("turnB");
		turnB[0].innerHTML = "your turn";
	}

	if (turn % 2 === 0) {
		let turnA = document.getElementsByClassName("turnA");
		turnA[0].innerHTML = "your turn";
		let turnB = document.getElementsByClassName("turnB");
		turnB[0].innerHTML = " ";
	}


		if (win) {
			let winOrLoseTarget = document.getElementsByClassName("turnA");
			winOrLoseTarget[0].innerHTML = "win!";

			let winOrLoseTargetB = document.getElementsByClassName("turnB");
			winOrLoseTargetB[0].innerHTML = "lose!";
		}

		if (winB) {
			let winOrLoseTargetB = document.getElementsByClassName("turnB");
			winOrLoseTargetB[0].innerHTML = "win!";

			let winOrLoseTarget = document.getElementsByClassName("turnA");
			winOrLoseTargetB[0].innerHTML = "lose!";
		}

		if (win && winB) {
			let winOrLoseTarget = document.getElementsByClassName("turnA");
			winOrLoseTarget[0].innerHTML = "draw!";

			let winOrLoseTargetB = document.getElementsByClassName("turnB");
			winOrLoseTargetB[0].innerHTML = "draw!";
		}

		if (lose) {
			let winOrLoseTarget = document.getElementsByClassName("win");
			winOrLoseTarget[0].innerHTML = "lose";
		}

	cantMove = 0;
	cantMoveB = 0;

}

window.onload = initGame;
