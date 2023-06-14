import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { TaskService } from '../task.service';
import { Task } from '../task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent {
  taskService: TaskService = inject(TaskService);

  form = new FormGroup({
    name: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required])
  });

  async add(): Promise<void> {
    const newTask: Task = {
      name: this.form.value.name ?? '',
      description: this.form.value.description ?? '',
      completed: false
    };

    await this.taskService.addTask(newTask);
    this.form.reset();
  }
}
