import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { POneComponent } from "./parent/p-one/p-one.component";
import { COneComponent } from "./parent/p-one/child/c-one/c-one.component";
import { CTwoComponent } from "./parent/p-one/child/c-two/c-two.component";
import { GchOneComponent } from "./parent/p-one/child/c-one/grandChildren/gch-one/gch-one.component";
import { GchTwoComponent } from "./parent/p-one/child/c-one/grandChildren/gch-two/gch-two.component";
import { C2GchOneComponent } from "./parent/p-one/child/c-two/grandChildren/gch-one/gch-one.component";
import { C2GchTwoComponent } from "./parent/p-one/child/c-two/grandChildren/gch-two/gch-two.component";

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    POneComponent,
    COneComponent,
    CTwoComponent,
    GchOneComponent,
    GchTwoComponent,
    C2GchOneComponent,
    C2GchTwoComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
