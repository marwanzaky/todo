import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Task } from './task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'todo';
  tasks: Task[] = [];
  selectedTask?: Task;

  addTaskForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required])
  });

  addTask(): void {
    const newTask: Task = {
      name: this.addTaskForm.value.name ?? '',
      description: this.addTaskForm.value.description ?? '',
      completed: false
    };

    this.tasks.push(newTask);
    this.addTaskForm.reset();
  }

  onSelect(task: Task): void {
    this.selectedTask = task;
  }
}
