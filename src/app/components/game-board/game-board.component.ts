import { Component } from '@angular/core';

@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.css'],
})
export class GameBoardComponent {
  //player first starts off as X (which is player 1. O is player 2)
  currentPlayer: string = 'X';

  //showcases players turn and gamestate after all index filled
  playersStatus: string = 'Click a tile to play!';

  //used to disable buttons when the game is finished
  gameDone: boolean = false;

  //create an array of nine boardCells to track data of players and gamestate
  boardCells: string[] = new Array(9).fill('');

  //players occupies these spaces in their index, will be declared winners
  winningConditions: number[][] = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  //showcases the status of the turns of X and O
  playersStatusFunct() {
    if (this.currentPlayer === 'X') {
      this.playersStatus = "Player 1's Turn";
    } else if (this.currentPlayer === 'O') {
      this.playersStatus = "Player 2's Turn";
    }
  }

  //determines the game's winners
  gamesWinner() {
    //if the winnning for X and O conditions arent met, it is a tie
    let noWinner = false;

    // Loop through all winning condition variable
    for (let i = 0; i < this.winningConditions.length; i++) {
      const condition = this.winningConditions[i];

      //verify if the winning conditions are met for X and O
      const winnerX = condition.every(
        (index) => this.boardCells[index] === 'X'
      );
      const winnerO = condition.every(
        (index) => this.boardCells[index] === 'O'
      );

      //if the condiitons are met display winner and siable buttons
      if (winnerX) {
        this.playersStatus = 'X has won!';
        this.gameDone = true;
      } else if (winnerO) {
        this.playersStatus = 'O has won!';
        this.gameDone = true;
      }
    }

    //checks if all cells are filled, in order to verify if there is no winner from X and o
    //sets it to true, and disables tie text, and disables buttons
    if (!noWinner && this.boardCells.every((cell) => cell !== '')) {
      this.playersStatus = "It's a tie!";
      this.gameDone = true;
    }
  }

  //function to determine where X and O go in their own index aka their moves
  makeMove(index: number) {
    if (!this.gameDone && this.boardCells[index] === '') {
      //fill in array with current player
      this.boardCells[index] = this.currentPlayer;

      // determines when is X and O in the board
      this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
    }

    //run these functions to update/determine winner and player status
    this.playersStatusFunct();
    this.gamesWinner();
  }

  //refreshes page to restart game
  refreshPage() {
    window.location.reload();
  }
}
