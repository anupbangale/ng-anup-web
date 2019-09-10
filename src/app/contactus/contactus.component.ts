import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactusComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
