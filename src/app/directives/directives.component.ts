import { Component } from "@angular/core";
import { User } from "./user.models";
import { users, users2 } from "./list-items.config";

@Component({
  selector: "app-directives",
  templateUrl: "./directives.component.html",
  styleUrl: "./directives.component.scss",
})
export class DirectivesComponent {
  public showContent: boolean = true;
  public names: string[] = ["Brisna", "Miguel", "Hera", "Jesús"];
  public users: User[] = users;
  public users2: User[] = users2;

  public selectUser(user: User) {
    user.isSelected = !user.isSelected;
  }
}
