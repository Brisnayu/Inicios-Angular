import { CommonModule } from "@angular/common";
import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: "app-son",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./son.component.html",
  styleUrl: "./son.component.scss",
})
export class SonComponent {
  @Input() public message: string = "";
  @Output() public messageSent = new EventEmitter<string>();

  public sendMessage() {
    this.messageSent.emit("Hola desde el componente hijo");
  }
}
