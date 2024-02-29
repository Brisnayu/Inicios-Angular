import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { SonComponent } from "./son/son.component";

@Component({
  selector: "app-father",
  standalone: true,
  imports: [CommonModule, SonComponent],
  templateUrl: "./father.component.html",
  styleUrl: "./father.component.scss",
})
export class FatherComponent {
  public message: string = "Hola desde el componente padre";

  public inputValue: string = "";

  public handleMessage(message: string) {
    console.log(message);
  }

  public changeInputValue(event: Event) {
    this.inputValue = (event.target as HTMLInputElement).value;
  }
}
