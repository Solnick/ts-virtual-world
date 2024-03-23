import { Fox } from '../app/Fox';
import { Antelope } from '../app/Antelope';
import { HollyBerry } from '../app/HollyBerry';

export const appContainer = document.querySelector<HTMLDivElement>('#app');

export const BOARD_SIZE = {
  x: 20,
  y: 20
}

export const INITIAL_ORGANISMS_NUMBER = BOARD_SIZE.x;

export const OrganismsClasses = [Fox, Antelope, HollyBerry]
