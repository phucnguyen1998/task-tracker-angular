import { UiService } from './../../services/ui.service';
import { Task } from './../../model/Task';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  // tslint:disable-next-line:no-output-on-prefix
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();

  text!: string;
  day!: string;
  reminder!: boolean;
  showAddTaskFrom!: boolean;
  subscripttion!: Subscription;

  constructor(private uiService: UiService) {
    this.subscripttion = this.uiService.onToggle().subscribe(val => this.showAddTaskFrom = val);
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    if (!this.text) {
      alert('Please add a Task');
      return;
    }
    const newTask = {
      text: this.text,
      day: this.day,
      reminder: this.reminder
    };

    // emit even
    this.onAddTask.emit(newTask);

    // Clear form
    this.text = '';
    this.day = '';
    this.reminder = false;
  }

}
