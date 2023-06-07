import { Component } from '@angular/core';
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

  addTask(name: string, description: string): void {
    const newTask: Task = {
      name,
      description,
      completed: false
    };

    this.tasks.push(newTask);
  }

  onSelect(task: Task): void {
    this.selectedTask = task;
  }
}
