import { Component } from '@angular/core';
import { getRandomPowerUp, NO_POWER_UP, PowerUp } from "./power-up-container/power-up";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  powerUp1: PowerUp = NO_POWER_UP;
  powerUp2: PowerUp = NO_POWER_UP;

  reRoll(): void {
    [this.powerUp1, this.powerUp2] = getRandomPowerUp();
  }
}
