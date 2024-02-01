import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameCardComponent } from './components/game-card/game-card.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoaderComponent } from './components/loader/loader.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    GameCardComponent,
    FooterComponent,
    LoaderComponent,
    NavbarComponent,
  ],
  imports: [CommonModule],
  exports: [
    GameCardComponent,
    FooterComponent,
    LoaderComponent,
    NavbarComponent,
  ],
})
export class SharedModule {}
