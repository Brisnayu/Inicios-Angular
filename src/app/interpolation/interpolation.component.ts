import { Component } from "@angular/core";

@Component({
  selector: "app-interpolation",
  standalone: true,
  imports: [],
  templateUrl: "./interpolation.component.html",
  styleUrl: "./interpolation.component.scss",
})
export class InterpolationComponent {
  public name: string = "Brisna";
  public imageUrl: string =
    "https://images.unsplash.com/photo-1503777119540-ce54b422baff?q=80&w=386&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  public hour: number = 13;

  public handleClick(event: Event) {
    console.log((event.target as HTMLElement).textContent);
    console.log("Estoy haciendo click 🤔");
  }
}
