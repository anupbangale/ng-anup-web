import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {
  longText =
    "Lorem Lorem ipsum dolorLoremLorem Lorem ipsum dolorLorem Lorem ipsum dolor eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.";

  constructor() { }

  ngOnInit() {
  }

}
