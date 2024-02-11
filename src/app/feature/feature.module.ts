import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameDetailsComponent } from './pages/game-details/game-details.component';
import { HomeComponent } from './pages/home/home.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    GameDetailsComponent,
    HomeComponent
    
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    GameDetailsComponent,
    HomeComponent
  ]
})
export class FeatureModule { }
