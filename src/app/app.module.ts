import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TaskComponent } from './task/task.component';
import { ButtonFullComponent, ButtonGhostComponent } from './ui/button/button.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    ButtonFullComponent,
    ButtonGhostComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
