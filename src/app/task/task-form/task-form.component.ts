import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss']
})
export class TaskFormComponent implements OnInit {
  @Output() addTaskEvent: EventEmitter<string> = new EventEmitter(); 
  constructor() { }

  ngOnInit(): void {
  }

  addTask(value:string, e:Event){
    e.preventDefault();
    this.addTaskEvent.emit(value);
    console.log(value);
  }

}
