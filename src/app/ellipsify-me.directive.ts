import { Directive, HostListener, ElementRef, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[appEllipsifyMe]'
})
export class EllipsifyMeDirective implements AfterViewInit {
  domElement: any;
  constructor(private elementRef: ElementRef) {
    this.domElement = this.elementRef.nativeElement; // to get DOM element and store it in global variable
    // setting compulsory required styles to the DOM element
    const elipsifyme = {
      'text-overflow': 'ellipsis',
      'overflow': 'hidden',
      'color': 'red',
      'white-space': 'nowrap',
    };
    Object.keys(elipsifyme).forEach(style => {
      this.domElement.style.setProperty(`${style}`, elipsifyme[style]);
    });
  }

  ngAfterViewInit(): void {
    // to check and add title attribute on the element at the time when application renders first time.
    this.domElement.scroll({
      top: 2, behavior: 'smooth'
    });
    this.isTitleAttribute();
  }

  @HostListener("window:resize", ["$event.target"])
  isTitleAttribute() {
    // to add or remove title attribute on the element when it is changing width.
    console.log('onWidthChange');
    (this.domElement.offsetWidth < this.domElement.scrollWidth) ?
      this.domElement.setAttribute("title", this.domElement.textContent) :
      this.domElement.removeAttribute("title");
  }

}
