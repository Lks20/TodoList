import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TaskServiceService } from 'src/app/services/task-service.service';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {

  @Input() task: any;
  @Output() removeTaskEvent: EventEmitter<number> = new EventEmitter();
  constructor(public dataTask:TaskServiceService) {

   }

  ngOnInit(): void {
  }
  removeTask(id:number, e:Event){
    e.preventDefault();
    this.dataTask.removeTask(id);
    this.removeTaskEvent.emit(id);
  }
  checkTask(task:any){
    this.dataTask.checkTask(task);
  }
}
