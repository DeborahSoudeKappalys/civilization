import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InitPlayerComponent } from './init-player/init-player.component';
import { GameComponent } from './game/game.component';

const routes: Routes = [
  {
    path: 'initialisation',
    component: InitPlayerComponent
  },
  {
    path: 'game',
    component: GameComponent
  },
  { path: '',   redirectTo: '/initialisation', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
