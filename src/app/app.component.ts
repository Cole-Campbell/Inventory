import { Component } from "@angular/core";
import { Store } from "@ngxs/store";
import { AddItem } from "./actions/inventory.actions";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  constructor(private store: Store) {}

  addItem() {
    this.store.dispatch(
      new AddItem({
        name: "Potion",
        flavourText: "It heals for 20hp...and tastes like cherries!"
      })
    );
  }
}
