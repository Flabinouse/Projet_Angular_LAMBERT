import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameComponent } from './game/game.component';

import { GameService } from './services/game/game.service';
import { GameUpdateComponent } from './game-update/game-update.component';
import { GameNewComponent } from './game-new/game-new.component';
import { GameListComponent } from './game-list/game-list.component';
import { HomeComponent } from './home/home.component';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { GameDetailComponent } from './game-detail/game-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    GameUpdateComponent,
    GameNewComponent,
    GameListComponent,
    HomeComponent,
    GameDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  providers: [
    GameService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
