import { Directive, HostListener, ElementRef, AfterViewInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appEllipsifyMe]'
})
export class EllipsifyMeDirective implements AfterViewInit {
  domElement: any;
  constructor(private renderer: Renderer2, private elementRef: ElementRef) {
    this.domElement = this.elementRef.nativeElement; // to get DOM element and store it in global variable
    // setting compulsory required styles to the DOM element
    const elipsifyme = {
      'text-overflow': 'ellipsis',
      'overflow': 'hidden',
      'color': 'red',
      'white-space': 'nowrap',
    };
    Object.keys(elipsifyme).forEach(newStyle => {
      // this.domElement.style.setProperty(`${newStyle}`, elipsifyme[newStyle]);
      this.renderer.setStyle(this.domElement, `${newStyle}`, elipsifyme[newStyle]);
    });
  }

  ngAfterViewInit(): void {
    // to check and add title attribute on the element at the time when application renders first time.
    // this.domElement.scroll({
    //   top: 2, behavior: 'smooth'
    // });
    this.renderer.setProperty(this.domElement, 'scrollTop', 2);
    this.setToolTip();
  }

  @HostListener("window:resize", ["$event.target"])
  setToolTip() {
    // to add or remove title attribute on the element when it is changing width.
    console.log('onWidthChange');
    // (this.domElement.offsetWidth < this.domElement.scrollWidth) ?
    //   this.domElement.setAttribute("title", this.domElement.textContent) :
    //   this.domElement.removeAttribute("title");

    (this.domElement.offsetWidth < this.domElement.scrollWidth) ?
      this.renderer.setAttribute(this.domElement, 'title', this.domElement.textContent) :
      this.renderer.removeAttribute(this.domElement, 'title');
  }

}
