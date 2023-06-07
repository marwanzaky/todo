import { Component, Input, Output, EventEmitter, HostListener } from '@angular/core';

import { Task } from '../task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent {
  @Input() task?: Task;
  @Output() selectedTask = new EventEmitter<Task>();

  @HostListener('click')
  onClick() {
    this.selectedTask.emit(this.task);
  }
}
