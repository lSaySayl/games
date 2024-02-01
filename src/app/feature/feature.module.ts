import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameDetailsComponent } from './pages/game-details/game-details.component';
import { HomeComponent } from './pages/home/home.component';



@NgModule({
  declarations: [
    GameDetailsComponent,
    HomeComponent
    
  ],
  imports: [
    CommonModule
  ],
  exports: [
    GameDetailsComponent,
    HomeComponent
  ]
})
export class FeatureModule { }
