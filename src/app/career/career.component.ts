import { OnInit, ChangeDetectionStrategy, } from "@angular/core";
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
// import { DeprecatedI18NPipesModule } from '@angular/common';

@Component({
  selector: "app-career",
  templateUrl: "./career.component.html",
  styleUrls: ["./career.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CareerComponent implements OnInit, AfterViewInit {
  @ViewChild('myDiv', { static: false }) myDiv: ElementRef;

  longText =
    'Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,';
  constructor() { }

  ngOnInit() {
    console.log('ngOnInit');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
    console.log('myDiv>>', this.myDiv);

    // console.log(this.myDiv.nativeElement.innerHTML);
    const ele = this.myDiv.nativeElement;
    const flag = this.isEllipsisActive(ele);
    console.log('flag>>', flag);

  }



  isEllipsisActive(e) {
    console.log('>>', e);
    console.log('e.offsetWidth', e.offsetWidth);
    console.log('e.scrollWidth', e.scrollWidth);
    console.log('...', e.innerHTML);
    // e.childNodes[0].length
    console.log('e.childNodes[0].length', e.childNodes[0].length);

    // const length = e.childNodes[0].length
    // el.offsetWidth < el.scrollWidth
    return e.offsetWidth === e.scrollWidth
    // return (e.offsetWidth > length);
  }

}
