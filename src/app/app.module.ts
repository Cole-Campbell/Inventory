import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { InventoryState } from "./states/InventoryState";
import { NgxsModule } from "@ngxs/store";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NgxsModule.forRoot([InventoryState])],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
