import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TaskServiceService } from 'src/app/services/task-service.service';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss']
})
export class TaskFormComponent implements OnInit {
  @Output() addTaskEvent: EventEmitter<string> = new EventEmitter(); 
  
  constructor(public dataTask:TaskServiceService) {

   }

  ngOnInit(): void {
  }

  addTask(value:string, e:Event){
    e.preventDefault();
    this.dataTask.addTask(value);
    this.addTaskEvent.emit(value);
    console.log(value);
  }

}
