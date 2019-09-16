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
  domElement: any;

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void { }

  ngAfterViewInit(): void {
    this.domElement = this.rightContainer.nativeElement;
    this.renderer.listen(this.domElement, 'scroll', () => {
      const scrollPosition = this.domElement.scrollTop || document.documentElement.scrollTop || document.body.scrollTop || 0;
      (scrollPosition >= this.topPosToStartShowing) ? this.isShow = true : this.isShow = false;
    });
  }

  scrollTop() {
    // ele.scrollTo(0, 0);
    this.domElement.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }

}
