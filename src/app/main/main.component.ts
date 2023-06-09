import { Component, inject } from '@angular/core';

import { Task } from '../task';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  darkMode = false;

  taskService: TaskService = inject(TaskService);

  tasks: Task[] = [];
  selectedTask?: Task;

  constructor() {
    this.tasks = this.taskService.getAllTasks();
  }

  get user(): { email: string } {
    const user = localStorage.getItem('user') ?? '';
    return JSON.parse(user);
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
