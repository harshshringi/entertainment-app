import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EntityTypeComponent } from './entity-type/entity-type.component';
import { EntityDetailsComponent } from './entity-details/entity-details.component';
import { EntityTypeControlComponent } from './entity-type-control/entity-type-control.component';
import { EntityControlComponent } from './entity-control/entity-control.component';

@NgModule({
  declarations: [
    AppComponent,
    EntityTypeComponent,
    EntityDetailsComponent,
    EntityTypeControlComponent,
    EntityControlComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
