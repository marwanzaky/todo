import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TaskComponent } from './task/task.component';
import { ButtonFullComponent, ButtonGhostComponent } from './ui/button/button.component';
import { MenuComponent } from './menu/menu.component';
import { MainComponent } from './main/main.component';
import { AddTaskComponent } from './add-task/add-task.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    ButtonFullComponent,
    ButtonGhostComponent,
    MenuComponent,
    MainComponent,
    AddTaskComponent
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
