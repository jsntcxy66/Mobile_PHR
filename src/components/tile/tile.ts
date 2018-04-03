import { Component, Input } from '@angular/core';
import { MedicalClassificationProvider } from '../../providers/medical-classification/medical-classification';

/**
 * Generated class for the TileComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'tile',
  templateUrl: 'tile.html',
  providers: [MedicalClassificationProvider]
})
export class TileComponent {
  @Input() tiles: Array<any>;
  text: string;

  constructor(
    public mcp: MedicalClassificationProvider
  ) {
    console.log('Hello TileComponent Component');
    this.text = 'Hello World';
  }

  getSub(id: number) {
    this.tiles = this.mcp.getSub(id);
  }
}
