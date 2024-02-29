import { CommonModule } from "@angular/common";
import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from "@angular/core";

@Component({
  selector: "app-son",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./son.component.html",
  styleUrl: "./son.component.scss",
})
export class SonComponent implements OnChanges {
  @Input() public message: string = "";
  @Output() public messageSent = new EventEmitter<string>();

  @Input() public inputValue: string = "";
  @Output() public inputValueChange = new EventEmitter<string>();
  
  public ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  public sendMessage() {
    this.messageSent.emit("Hola desde el componente hijo");
  }

  public changeInputValue(event: Event) {
    this.inputValueChange.emit((event.target as HTMLInputElement).value);
  }
}
