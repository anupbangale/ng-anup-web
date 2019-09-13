import { Directive, HostListener, ElementRef, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[appEllipsifyMe]'
})
export class EllipsifyMeDirective implements AfterViewInit {
  domElement: any;
  constructor(private elementRef: ElementRef) {
    this.domElement = this.elementRef.nativeElement;
    const elipsifyme = {
      'text-overflow': 'ellipsis',
      'overflow': 'hidden',
      'color': 'red',
      'white-space': 'nowrap',
    };
    Object.keys(elipsifyme).forEach(element => {
      this.domElement.style.setProperty(`${element}`, elipsifyme[element]);
    });
  }

  ngAfterViewInit(): void {
    this.domElement.scroll({
      top: 2, behavior: 'smooth'
    });
    // this.setRequiredStyles();
    this.onWidthChange();
  }

  setRequiredStyles() {
    const elipsifyme = {
      'text-overflow': 'ellipsis',
      'overflow': 'hidden',
      'color': 'red',
      'white-space': 'nowrap',
    };
    Object.keys(elipsifyme).forEach(element => {
      this.domElement.style.setProperty(`${element}`, elipsifyme[element]);
    });
  }

  @HostListener("window:resize", ["$event.target"])
  onWidthChange() {
    console.log('onWidthChange');
    (this.domElement.offsetWidth < this.domElement.scrollWidth) ?
      this.domElement.setAttribute("title", this.domElement.textContent) :
      this.domElement.removeAttribute("title");
  }

}
