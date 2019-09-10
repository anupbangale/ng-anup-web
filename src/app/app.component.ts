import { Component, ViewChild, Renderer2, AfterViewInit, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {

  title = 'theme-test';
  isShow: boolean;
  topPosToStartShowing = 100;

  @ViewChild('rightContainer', { static: false }) rightContainer;

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void { }

  ngAfterViewInit(): void {
    const ele = this.rightContainer.nativeElement;
    this.renderer.listen(ele, 'scroll', () => {
      const scrollPosition = ele.scrollTop || document.documentElement.scrollTop || document.body.scrollTop || 0;
      (scrollPosition >= this.topPosToStartShowing) ? this.isShow = true : this.isShow = false;
    });
  }

  scrollTop() {
    const ele = this.rightContainer.nativeElement;
    // ele.scrollTo(0, 0);
    ele.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }

}
