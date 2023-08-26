import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GameBoardComponent } from './components/game-board/game-board.component';
import { ButtonPlayerComponent } from './components/button-player/button-player.component';

@NgModule({
  declarations: [
    AppComponent,
    GameBoardComponent,
    ButtonPlayerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
