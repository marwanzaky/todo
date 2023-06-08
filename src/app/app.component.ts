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
  tasks: Task[] = [
    {
      name: 'Buy groceries: Milk, eggs, bread, and fruits.',
      description: 'Ensure you have essential food items by purchasing milk, eggs, bread, and a variety of fruits for the week.',
      completed: false
    },
    {
      name: 'Finish report for the meeting with the client.',
      description: 'Compile and complete the report that needs to be presented during the upcoming meeting with the client.',
      completed: false
    },
    {
      name: 'Call the doctor\'s office to schedule an appointment.',
      description: 'Contact the doctor\'s office to book an appointment for a medical check- up or consultation.',
      completed: false
    }
  ];
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
