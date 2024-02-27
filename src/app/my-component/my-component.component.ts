import { CommonModule } from "@angular/common";
import { AfterViewInit, Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from "@angular/core";
import { MyComponentHeaderComponent } from "./my-component-header/my-component-header.component";

@Component({
  selector: "app-my-component",
  standalone: true,
  imports: [CommonModule, MyComponentHeaderComponent],
  templateUrl: "./my-component.component.html",
  styleUrl: "./my-component.component.scss",
})
export class MyComponentComponent implements OnInit, OnDestroy, AfterViewInit, OnChanges {

// Los primeros que se van a ejecutar son:
// constructor ----> onInit ----> afterViewInit

  constructor() {
    console.log("Me he construido ❤️")
  }

  public ngOnInit(): void {
    console.log("Me he inicializado! 🤝");
  }

  public ngOnDestroy(): void {
    console.log("Me he destruido! 💔")
  }

  public ngOnChanges(changes: SimpleChanges): void {
    console.log("He cambiado 🤔")
  }

  public ngAfterViewInit(): void {
    console.log("La vista se ha inicializado 🤗")
  }

}
