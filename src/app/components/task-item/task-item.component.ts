import { Task } from './../../model/Task';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  @Input() task!: Task;
  // tslint:disable-next-line:no-output-on-prefix
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter();
  // tslint:disable-next-line:no-output-on-prefix
  @Output() onToggleTask: EventEmitter<Task> = new EventEmitter();

  faTimes = faTimes;

  constructor() { }

  ngOnInit(): void {
  }

  onDelete(task: any): void {
    this.onDeleteTask.emit(task);
  }

  onToggle(task: Task): void {
    this.onToggleTask.emit(task);
  }
}
