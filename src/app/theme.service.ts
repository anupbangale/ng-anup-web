import { Injectable } from '@angular/core';

export const darkTheme = {
  'background-color': '#1f2935',
  'text-color': '#fff',
  'border-color': '#e5e5e5',
  'card-background-color': '#4e4141'
};

export const lightTheme = {
  'background-color': '#e5e5e5',
  'text-color': '#2d2d2d',
  'border-color': '#1f2935',
  'card-background-color': '#e8edf3'
};

export const blueTheme = {
  'primary-color': '#3d9dec',
  'secondary-color': '#90cdff',
  'button-color': '#336691'
};

export const greenTheme = {
  'primary-color': '#84bf69',
  'secondary-color': '#d0fcbd',
  'button-color': '#507041'
};

export const yellowTheme = {
  'primary-color': '#e0973c',
  'secondary-color': '#ffd198',
  'button-color': '#cc7b16'
};

export const pinkTheme = {
  'primary-color': '#b54e78',
  'secondary-color': '#ef95bb',
  'button-color': '#5f253d'
};

export const purpleTheme = {
  'primary-color': '#75608a',
  'secondary-color': '#ccbedb',
  'button-color': '#867993',
};

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  constructor() { }

  toggleDark() {
    this.setTheme(darkTheme);
  }

  toggleLight() {
    this.setTheme(lightTheme);
  }

  setCustomeTheme(theme: string) {
    switch (theme) {
      case 'green': {
        this.setTheme(greenTheme);
        break;
      }
      case 'yellow': {
        this.setTheme(yellowTheme);
        break;
      }
      case 'pink': {
        this.setTheme(pinkTheme);
        break;
      }
      case 'purple': {
        this.setTheme(purpleTheme);
        break;
      }
      default: {
        this.setTheme(blueTheme);
        break;
      }
    }
  }

  private setTheme(theme: {}) {
    Object.keys(theme).forEach(element => {
      return document.documentElement.style.setProperty(`--${element}`, theme[element]);
    });
  }
}
