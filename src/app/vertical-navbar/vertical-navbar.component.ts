import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-vertical-navbar',
  templateUrl: './vertical-navbar.component.html',
  styleUrls: ['./vertical-navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VerticalNavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
