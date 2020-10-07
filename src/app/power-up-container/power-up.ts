export class PowerUp {
  name: string;
  icon: string;
  type: PowerUpType;
}

export enum PowerUpType {
  DEFENSE,
  MINE,
  OFFENSE,
  TRAP,
  NEUTRAL
}

export const NO_POWER_UP: PowerUp = {
  name: 'Bravery',
  icon: 'cfpro-logo',
  type: PowerUpType.NEUTRAL,
};

const ALL_POWER_UPS: PowerUp[] = [
  {name: '180', icon: '180', type: PowerUpType.DEFENSE},
  {name: 'Angle Turns', icon: 'angle-turns', type: PowerUpType.DEFENSE},
  {name: 'Brake', icon: 'brake', type: PowerUpType.DEFENSE},
  {name: 'Clock Block', icon: 'clock-block', type: PowerUpType.TRAP},
  {name: 'Curve Blind', icon: 'curve-blind', type: PowerUpType.TRAP},
  {name: 'Double Shot', icon: 'double-shot', type: PowerUpType.OFFENSE},
  {name: 'Hide Self', icon: 'hide-self', type: PowerUpType.DEFENSE},
  {name: 'Homing', icon: 'homing', type: PowerUpType.OFFENSE},
  {name: 'Jump', icon: 'jump', type: PowerUpType.DEFENSE},
  {name: 'Laser', icon: 'laser', type: PowerUpType.OFFENSE},
  {name: 'Low Res', icon: 'low-res', type: PowerUpType.TRAP},
  {name: 'Mine', icon: 'mine', type: PowerUpType.MINE},
  {name: 'Multi Shot', icon: 'multi-shot', type: PowerUpType.OFFENSE},
  {name: 'One Shot', icon: 'one-shot', type: PowerUpType.OFFENSE},
  {name: 'Power Dash', icon: 'power-dash', type: PowerUpType.DEFENSE},
  {name: 'Reverse', icon: 'reverse', type: PowerUpType.TRAP},
  {name: 'Scatter Shot', icon: 'scatter-shot', type: PowerUpType.OFFENSE},
  {name: 'Shield', icon: 'shield', type: PowerUpType.DEFENSE},
  {name: 'Side Shot', icon: 'side-shot', type: PowerUpType.OFFENSE},
  {name: 'Speed Burst', icon: 'speed-burst', type: PowerUpType.DEFENSE},
  {name: 'Speedy', icon: 'speedy', type: PowerUpType.TRAP},
  {name: 'Stealth Mine', icon: 'stealth-mine', type: PowerUpType.MINE},
  {name: 'Steer Less', icon: 'steer-less', type: PowerUpType.TRAP},
  {name: 'Teleport', icon: 'teleport', type: PowerUpType.DEFENSE},
  {name: 'Thick', icon: 'thick', type: PowerUpType.TRAP},
  {name: 'Thin', icon: 'thin', type: PowerUpType.DEFENSE},
  {name: 'Time Bomb', icon: 'time-bomb', type: PowerUpType.MINE},
  {name: 'Trigger Bomb', icon: 'trigger-bomb', type: PowerUpType.MINE},
  {name: 'Trippy', icon: 'trippy', type: PowerUpType.TRAP},
  {name: 'Zap', icon: 'zap', type: PowerUpType.OFFENSE},
];

export const getRandomPowerUp = (): [PowerUp, PowerUp] => {
  const randomIndex1 = Math.floor(Math.random() * ALL_POWER_UPS.length);
  let randomIndex2 = randomIndex1;

  do {
    randomIndex2 = Math.floor(Math.random() * ALL_POWER_UPS.length);
  } while (randomIndex2 === randomIndex1);

  return [ALL_POWER_UPS[randomIndex1], ALL_POWER_UPS[randomIndex2]];
};
