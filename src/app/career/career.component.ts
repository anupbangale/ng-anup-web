import { OnInit, ChangeDetectionStrategy, HostListener, } from "@angular/core";
import { AfterViewInit, Component, ElementRef, ViewChild } from "@angular/core";

@Component({
  selector: "app-career",
  templateUrl: "./career.component.html",
  styleUrls: ["./career.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CareerComponent implements OnInit, AfterViewInit {
  @ViewChild("myDiv", { static: false }) myDiv: ElementRef;

  longText =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.";

  constructor() { }

  ngOnInit() { }

  @HostListener("window:resize", ["$event.target"])
  checkEllipsify() {
    const ele = this.myDiv.nativeElement;
    // this.isEllipsisActive(ele);
    if (ele.offsetWidth < ele.scrollWidth) {
      console.log("if");
      ele.setAttribute("title", ele.textContent);
    } else {
      console.log("else");
      ele.removeAttribute("title");
    }
  }


  ngAfterViewInit(): void {
    console.log("ngAfterViewInit");
    console.log("myDiv>>", this.myDiv);
    // console.log(this.myDiv.nativeElement.innerHTML);
    const ele = this.myDiv.nativeElement;
    // this.isEllipsisActive(ele);
    if (ele.offsetWidth < ele.scrollWidth) {
      console.log("if");
      ele.setAttribute("title", ele.textContent);
    } else {
      console.log("else");
      ele.removeAttribute("title");
    }
  }

}
