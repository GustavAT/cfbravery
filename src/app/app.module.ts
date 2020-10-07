import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PowerUpContainerComponent } from './power-up-container/power-up-container.component';

@NgModule({
  declarations: [
    AppComponent,
    PowerUpContainerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
