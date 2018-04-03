import { Component } from '@angular/core';

/**
 * Generated class for the TileComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'tile',
  templateUrl: 'tile.html'
})
export class TileComponent {

  text: string;

  constructor() {
    console.log('Hello TileComponent Component');
    this.text = 'Hello World';
  }

}
