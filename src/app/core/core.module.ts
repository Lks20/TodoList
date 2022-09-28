import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { TaskModule } from '../task/task.module';



@NgModule({
  declarations: [
    HeaderComponent,
    MainComponent
  ],
  imports: [
    CommonModule,
    TaskModule
  ],
  exports:[
    HeaderComponent,
    MainComponent
  ]
    
  
})
export class CoreModule { }
