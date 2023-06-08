import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Task } from './task';
import { TaskService } from './task.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'todo';
  darkMode = false;

  taskService: TaskService = inject(TaskService);

  tasks: Task[] = [];
  selectedTask?: Task;

  constructor() {
    this.tasks = this.taskService.getAllTasks();
  }

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

    this.taskService.addTask(newTask);
    this.addTaskForm.reset();
  }

  onSelect(task: Task): void {
    this.selectedTask = task;
  }

  onDarkModeChange(): void {
    const body = document.querySelector('body');
    const dataTheme = body?.getAttribute('data-theme');
    body?.setAttribute('data-theme', dataTheme === 'dark' ? 'light' : 'dark');
  }
}
