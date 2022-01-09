import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { GameDetailComponent } from './game-detail/game-detail.component';
import { GameListComponent } from './game-list/game-list.component';
import { GameNewComponent } from './game-new/game-new.component';
import { GameUpdateComponent } from './game-update/game-update.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { 
    path: '', 
    component:  HomeComponent
  },
  { 
    path: 'new', 
    component:  GameNewComponent
  },
  { 
    path: 'games', 
    component: GameListComponent
  },
  { 
    path: 'modify/:id', 
    component: GameUpdateComponent
  },
  { 
    path: 'detail/:id', 
    component: GameDetailComponent
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
