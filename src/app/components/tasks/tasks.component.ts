import { TaskService } from './../../services/task.service';
import { Task } from './../../model/Task';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  constructor(private taskService: TaskService) { }
  tasks: Task[] = [];

  ngOnInit(): void {
    this.taskService.getTask().subscribe((tasks) => this.tasks = tasks);
  }

  // tslint:disable-next-line:typedef
  onDeleteTask(task: Task) {
    this.taskService.deleteTask(task).subscribe(() => this.tasks = this.tasks.filter(x => x.id !== task.id));
  }

  onToggleTask(task: Task): void {
    task.reminder = !task.reminder;
    this.taskService.updateTaskReminder(task).subscribe();
  }

  addTask(newTask: Task): void {
    this.taskService.AddTask(newTask).subscribe((tasks) => (
      this.tasks.push(newTask)
    ));
  }
}
