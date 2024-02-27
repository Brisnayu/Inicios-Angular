import { Directive, HostBinding, HostListener } from "@angular/core";

@Directive({
  selector: "[appHighlight]",
  standalone: true,
})
export class HighlightDirective {
  @HostBinding("style.backgroundColor") public backgroundColor: string =
    "transparent";

  @HostListener("mouseenter") public onMouseEnter() {
    this.backgroundColor = "green";
  }

  @HostListener("mouseleave") public onMouseLeave = () => {
    this.backgroundColor = "transparent";
  }
}
