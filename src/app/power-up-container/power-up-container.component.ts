import {Component, Input} from '@angular/core';
import {NO_POWER_UP, PowerUp, PowerUpType} from "./power-up";

@Component({
  selector: 'app-power-up-container',
  templateUrl: './power-up-container.component.html',
  styleUrls: ['./power-up-container.component.scss']
})
export class PowerUpContainerComponent {
  @Input()
  powerUp: PowerUp = NO_POWER_UP;


  getPowerUpClass(): string {
    return 'power-up-' + PowerUpType[this.powerUp.type].toLowerCase();
  }
}
