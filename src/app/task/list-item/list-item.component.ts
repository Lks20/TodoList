import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {

  @Input() task: any;
  @Output() removeTaskEvent: EventEmitter<number> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  removeTask(id:number, e:Event){
    e.preventDefault();
    this.removeTaskEvent.emit(id)
    console.log("El id sale de list-item ",id);
  }
}
