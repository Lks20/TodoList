import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskFormComponent } from './task-form/task-form.component';
import { TaskListComponent } from './task-list/task-list.component';
import { ListItemComponent } from './list-item/list-item.component';



@NgModule({
  declarations: [
    TaskFormComponent,
    TaskListComponent,
    ListItemComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TaskFormComponent,
    TaskListComponent
  ]
})
export class TaskModule { }
