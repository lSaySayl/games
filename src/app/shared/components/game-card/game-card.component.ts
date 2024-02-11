import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
})
export class GameCardComponent {
  @Input()
  title: string = '';

  @Input()
  description: string = '';

  @Input()
  thumbnail: string = '';

  @Input()
  gameId: string = '';
}
