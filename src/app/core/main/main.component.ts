import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  @Output() addTaskEvent:EventEmitter<string>=new EventEmitter();
  @Output() removeTaskEvent: EventEmitter<number> = new EventEmitter();
  @Input() tasks!: any[];

  constructor() { }

  ngOnInit(): void {
  }

  addTask(value: string) {
    this.addTaskEvent.emit(value);
    console.log("Llego!!",value);
  }

  removeTask(id:number){
    this.removeTaskEvent.emit(id);
    console.log("el id llego hasta main",id);
  }

}
