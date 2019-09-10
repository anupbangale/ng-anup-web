import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../theme.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  checked = false;
  darkTheme = new FormControl(false);

  constructor(private themeService: ThemeService) {
    this.themeService.setCustomeTheme('blue');
    this.darkTheme.valueChanges.subscribe(value => {
      if (value) {
        this.themeService.toggleDark();
      } else {
        this.themeService.toggleLight();
      }
    });
  }

  ngOnInit() {
  }

  onClickThemeHandler(theme) {
    console.log(theme);
    this.themeService.setCustomeTheme(theme);
  }
}
