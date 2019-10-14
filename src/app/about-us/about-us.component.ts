import { Component, OnInit, ChangeDetectionStrategy, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutUsComponent implements OnInit, AfterViewInit {

  @ViewChild('myInput', { static: false }) private myInput: ElementRef;

  constructor() { }

  ngOnInit() { }

  ngAfterViewInit() {
    this.myInput.nativeElement.focus();
  }

}
