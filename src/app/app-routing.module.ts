import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './feature/pages/home/home.component';
import { GameDetailsComponent } from './feature/pages/game-details/game-details.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'game-details/:id', component: GameDetailsComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
