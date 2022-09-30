import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TaskServiceService } from 'src/app/services/task-service.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {
  @Output() removeTaskEvent: EventEmitter<number> = new EventEmitter();
  tasks!: any[];  



  constructor(public dataTasks:TaskServiceService) { }

  ngOnInit(): void {
    this.tasks=this.dataTasks.getTasks();
  }

   removeTask(id:number){
    this.tasks=this.dataTasks.getTasks();
   }

}
