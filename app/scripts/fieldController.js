//fieldController.js
//　fieldの要素を変更するjs

function addTile() {	// 新しいタイルを生成する
	let voidGrid = [];	// 現在空(0)のグリッドを保持する配列
	for(let i = 0;i < grid.length; i++) {	// 各gridを見て0が入っている番号をvoidGridが保持
		if(grid[i] === 0) {
			voidGrid.push(i);
		}
	}

	let randVoidGrid = Math.floor( Math.random() * voidGrid.length ) ;	// 0~voidGrid配列の要素数をランダムに得る
	let twoOrFour = (Math.floor( Math.random() * 2 ) + 1);
	grid[voidGrid[randVoidGrid]] = twoOrFour;	// 空のグリッドからランダムな番号に2を代入
	voidGrid.length = 0;	// voidGrid配列を初期化

		let voidGridB = [];	// 現在空(0)のグリッドを保持する配列
		for(let i = 0;i < gridB.length; i++) {	// 各gridを見て0が入っている番号をvoidGridが保持
			if(gridB[i] === 0) {
				voidGridB.push(i);
			}
		}

		let randVoidGridB = Math.floor( Math.random() * voidGridB.length ) ;	// 0~voidGrid配列の要素数をランダムに得る
		let twoOrFourB = (Math.floor( Math.random() * 2 ) + 1);
		gridB[voidGridB[randVoidGridB]] = twoOrFourB;	// 空のグリッドからランダムな番号に2を代入
		voidGridB.length = 0;	// voidGrid配列を初期化
	}

function initGame() {	// ゲームを初期化する
	for(let i = 0;i < grid.length; i++) {	// すべてのグリッドに0を入れる
		grid[i] = 0;
		gridB[i] = 0;
	}

	for(let i = 0;i < addTileNum ; i++) {
		addTile();
	}

	score = 0;

	cantMove = 0;

	win = false;

	winB = false;

	lose = false;

	turn = 0;

	render();
}

//-----------------入力を受け付けてタイル移動--------------------

function moveLeft() {

	for (let j = 0; j < 3; j++) {
		for(let i = 0; i < grid.length; i++) {
			if((i % 4) === 0){
				if  (grid[i + 1] === grid[i]  && grid[i + 2] === grid[i]  && grid[i + 3] === grid[i] && grid[i] !==0){ //左端が0でなく横一列がすべて等しい時
					grid[i] = grid[i +1] + 1 + 20000;
					grid[i + 1] = grid[i + 1] + 1 + 30000;
					grid[i + 2] = 0;
					grid[i + 3] = 0;
					moved = true;
				}
			}

			if ((i % 4) !== 0) {　//左端でないとき
				if( grid[i - 1] === 0 && grid[i] !==0) {	//左が0で自分が0出ない時、左に自分の数を足して自分は0になる
				grid[i - 1] = grid[i - 1] + grid[i];
				grid[i] = 0;
				moved = true;
				}
				if( grid[i - 1] === grid[i]  && grid[i] !==0) {	//左が0以外の自分と等しい数字の時、左に自分の数と10,000を足して自分は0になる

				    grid[i - 1] = grid[i - 1] + 1 + 10000;

				    score = score + grid[i] * 2;
				    moved = true;

				if (grid[i] + 1 === maxTile) {
					win = true;
				}


				grid[i] = 0;

				}
			}
		}
	}

	//gridB
for (let j = 0; j < 3; j++) {
	for(let i = 0; i < gridB.length; i++) {
		if((i % 4) === 0){
			if  (gridB[i + 1] === gridB[i]  && gridB[i + 2] === gridB[i]  && gridB[i + 3] === gridB[i] && gridB[i] !==0){ //左端が0でなく横一列がすべて等しい時
				gridB[i] = gridB[i +1] + 1 + 20000;
				gridB[i + 1] = gridB[i + 1] + 1 + 30000;
				gridB[i + 2] = 0;
				gridB[i + 3] = 0;
				moved = true;
			}
		}

		if ((i % 4) !== 0) {　//左端でないとき
			if( gridB[i - 1] === 0 && gridB[i] !==0) {	//左が0で自分が0出ない時、左に自分の数を足して自分は0になる
			gridB[i - 1] = gridB[i - 1] + gridB[i];
			gridB[i] = 0;
			moved = true;
			}
			if( gridB[i - 1] === gridB[i]  && gridB[i] !==0) {	//左が0以外の自分と等しい数字の時、左に自分の数と10,000を足して自分は0になる

					gridB[i - 1] = gridB[i - 1] + 1 + 10000;

					//score = score + gridB[i] * 2;
					moved = true;

			if (gridB[i] + 1 === maxTile) {
				winB = true;
			}


			gridB[i] = 0;

			}
		}
	}
}

	if (moved) {
	addTile();
	turn++;
	}

	moved = false;

  	render();
}

function moveUp() {

	for (let j = 0; j < 3; j++) {
		for(let i = 0; i < grid.length; i++) {

			if(( i + 11) < 15){//
				if  (grid[i + 4] === grid[i]  && grid[i + 8] === grid[i]  && grid[i + 12] === grid[i] && grid[i] !==0){ //上端が0でなく縦一列がすべて等しい時
					grid[i] = grid[i +4] + 1 + 20000;
					grid[i + 4] = grid[i + 4] + 1 + 30000;
					grid[i + 8] = 0;
					grid[i + 12] = 0;
					moved = true;
				}
			}

			if (( i + 11) >=15) {//上端でないとき

				if(grid[i - 4] === 0  && grid[i] !==0) {//上が0で自分が0出ない時、上に自分の数を足して自分は0になる
				grid[i - 4] = grid[i - 4] + grid[i];
				grid[i] = 0;
				moved = true;
				}
				if(grid[i - 4] === grid[i]   && grid[i] !==0) {//上が0以外の自分と等しい数字の時、上に自分の数と10,000を足して自分は0になる

				grid[i - 4] = grid[i - 4] + 1 + 10000;

				score = score + grid[i] * 2;
				moved = true;

				if (grid[i] + 1 === maxTile) {
					win = true;
				}


				grid[i] = 0;
				}
			}
		}
	}

	// gridB
	for (let j = 0; j < 3; j++) {
		for(let i = 0; i < gridB.length; i++) {

			if((i + 11) < 15){//
				if  (gridB[i + 4] === gridB[i]  && gridB[i + 8] === gridB[i]  && gridB[i + 12] === gridB[i] && gridB[i] !==0){ //上端が0でなく縦一列がすべて等しい時
					gridB[i] = gridB[i +4] + 1 + 20000;
					gridB[i + 4] = gridB[i + 4] + 1 + 30000;
					gridB[i + 8] = 0;
					gridB[i + 12] = 0;
					moved = true;
				}
			}

			if (( i + 11) >=15) {//上端でないとき

				if(gridB[i - 4] === 0  && gridB[i] !==0) {//上が0で自分が0出ない時、上に自分の数を足して自分は0になる
				gridB[i - 4] = gridB[i - 4] + gridB[i];
				gridB[i] = 0;
				moved = true;
				}
				if(gridB[i - 4] === gridB[i]   && gridB[i] !==0) {//上が0以外の自分と等しい数字の時、上に自分の数と10,000を足して自分は0になる

				gridB[i - 4] = gridB[i - 4] + 1 + 10000;

				//score = score + gridB[i] * 2;
				moved = true;

				if (gridB[i] + 1 === maxTile) {
					winB = true;
				}


				gridB[i] = 0;
				}
			}
		}
	}

	if (moved) {
	addTile();
	turn++;
	}

	moved = false;

  	render();
   }

function moveDown() {

	for (let j = 0; j < 3; j++) {
		for(let i = grid.length-1; i >= 0; i--) {

			 if((i - 11) > 0){
				if  (grid[i - 4] === grid[i]  && grid[i - 8] === grid[i]  && grid[i - 12] === grid[i] && grid[i] !==0){ //下端が0でなく縦一列がすべて等しい時
					grid[i] = grid[i -4] + 1 + 20000;
					grid[i - 4] = grid[i - 4] + 1 + 30000;
					grid[i - 8] = 0;
					grid[i - 12] = 0;
					moved = true;
				}
			}

			if ((i % 4) <= 16) {//下端でないとき

				if(grid[i + 4] === 0  && grid[i] !== 0) {//下が0で自分が0出ない時、下に自分の数を足して自分は0になる
				grid[i + 4] = grid[i + 4] + grid[i] ;
				grid[i] = 0;
				moved = true;
				}
				if(grid[i + 4] === grid[i] && grid[i] !== 0) {//下が0以外の自分と等しい数字の時、下に自分の数と10,000を足して自分は0になる
				grid[i + 4] = grid[i + 4] + 1 + 10000;

				score = score + grid[i] * 2;
				moved = true;

				if (grid[i] + 1 === maxTile) {
					win = true;
				}

				grid[i] = 0;
				}
			}
		}
	}

		// gridB
		for (let j = 0; j < 3; j++) {
			for(let i = gridB.length-1; i >= 0; i--) {

				 if((i - 11) > 0){
					if  (gridB[i - 4] === gridB[i]  && gridB[i - 8] === gridB[i]  && gridB[i - 12] === gridB[i] && gridB[i] !==0){ //下端が0でなく縦一列がすべて等しい時
						gridB[i] = gridB[i -4] + 1 + 20000;
						gridB[i - 4] = gridB[i - 4] + 1 + 30000;
						gridB[i - 8] = 0;
						gridB[i - 12] = 0;
						moved = true;
					}
				}

				if ((i % 4) <= 16) {//下端でないとき

					if(gridB[i + 4] === 0  && gridB[i] !== 0) {//下が0で自分が0出ない時、下に自分の数を足して自分は0になる
					gridB[i + 4] = gridB[i + 4] + gridB[i] ;
					gridB[i] = 0;
					moved = true;
					}
					if(gridB[i + 4] === gridB[i] && gridB[i] !== 0) {//下が0以外の自分と等しい数字の時、下に自分の数と10,000を足して自分は0になる
					gridB[i + 4] = gridB[i + 4] + 1 + 10000;

					//score = score + gridB[i] * 2;
					moved = true;

					if (gridB[i] + 1 === maxTile) {
						winB = true;
					}

					gridB[i] = 0;
					}
				}
			}
		}

	if (moved) {
	addTile();
	turn++;
	}

	moved = false;

  	render();
}

function moveRight() {

	for (let j = 0; j < 3; j++) {
		for(let i = grid.length-1; i >= 0; i--) {
			if((i % 4) === 3){
				if  (grid[i - 1] === grid[i]  && grid[i - 2] === grid[i]  && grid[i - 3] === grid[i] && grid[i] !==0){ //右端が0でなく横一列がすべて等しい時
					grid[i] = grid[i -1] + 1 + 20000;
					grid[i - 1] = grid[i - 1] + 1 + 30000;
					grid[i - 2] = 0;
					grid[i - 3] = 0;
					moved = true;
				}
			}
			if ((i % 4) !== 3) {//右端でないとき
				if(grid[i + 1] === 0  && grid[i] !==0) {//右が0で自分が0出ない時、右に自分の数を足して自分は0になる
				grid[i + 1] = grid[i + 1] + grid[i];
				grid[i] = 0;
				moved = true;
				}

			if ( grid[i + 1] === grid[i]  && grid[i] !==0) {//右が0以外の自分と等しい数字の時、右に自分の数と10,000を足して自分は0になる
				grid[i + 1] = grid[i + 1] + 1 + 10000;

				score = score + grid[i] * 2;
				moved = true;

				if (grid[i] + 1=== maxTile) {
					win = true;
				}

				grid[i] = 0;
				}
			}
		}
	}

		// gridB
		for (let j = 0; j < 3; j++) {
			for(let i = gridB.length-1; i >= 0; i--) {
				if((i % 4) === 3){
					if  (gridB[i - 1] === gridB[i]  && gridB[i - 2] === gridB[i]  && gridB[i - 3] === gridB[i] && gridB[i] !==0){ //右端が0でなく横一列がすべて等しい時
						gridB[i] = gridB[i -1] + 1 + 20000;
						gridB[i - 1] = gridB[i - 1] + 1 + 30000;
						gridB[i - 2] = 0;
						gridB[i - 3] = 0;
						moved = true;
					}
				}
				if ((i % 4) !== 3) {//右端でないとき
					if(gridB[i + 1] === 0  && gridB[i] !==0) {//右が0で自分が0出ない時、右に自分の数を足して自分は0になる
					gridB[i + 1] = gridB[i + 1] + gridB[i];
					gridB[i] = 0;
					moved = true;
					}

				if ( gridB[i + 1] === gridB[i]  && gridB[i] !==0) {//右が0以外の自分と等しい数字の時、右に自分の数と10,000を足して自分は0になる
					gridB[i + 1] = gridB[i + 1] + 1 + 10000;

					score = score + gridB[i] * 2;
					moved = true;

					if (gridB[i] + 1 === maxTile) {
						winB = true;
					}

					gridB[i] = 0;
					}
				}
			}
		}


	if (moved) {
	addTile();
	turn++;
	}

	moved = false;

  	render();
}
