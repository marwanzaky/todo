import { Injectable } from '@angular/core';
import { Task } from './task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
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

  constructor() { }

  getAllTasks(): Task[] {
    return this.tasks;
  }

  addTask(task: Task) {
    this.tasks.push(task);
  }
}
