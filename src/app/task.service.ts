import { Injectable } from '@angular/core';
import { Task } from './task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  url = 'https://todo-api-stage.up.railway.app/tasks';

  async getAllTasks(): Promise<Task[]> {
    const res = await fetch(this.url);
    return await res.json() ?? [];
  }

  async addTask(task: Task): Promise<void> {
    const options: RequestInit = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(task)
    }

    const res = await fetch(this.url, options);
    const json = await res.json();

    console.log('New task created', json);
  }
}
