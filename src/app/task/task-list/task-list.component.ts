import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {
  @Output() removeTaskEvent: EventEmitter<number> = new EventEmitter();
  @Input() tasks!: any[];  

  constructor() { }

  ngOnInit(): void {
  }

  removeTask(id:number){
    this.removeTaskEvent.emit(id);
    console.log("el id llego hasta Task-list",id);
  }

}
