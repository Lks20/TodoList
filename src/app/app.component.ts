import { Component } from '@angular/core';
import { HAMMER_LOADER } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  
  // removeTask(id:number){
  //   console.log(this.tasks);
  //   this.tasks = this.tasks.filter(task => task.id !== id )
  //   console.log(this.tasks);
  //   console.log("el id llego hasta component",id);

  // }
    
  
  // addTask(value: string) {
  //   this.tasks.unshift({
  //     "id": this.tasks.length+1,
  //     "text": value,
  //     "completed": false
  //   })
  // }



  // tasks: any[] = [
  //   {
  //     "id": 123,
  //     "text": "Hola",
  //     "completed": true
  //   },
  //   {
  //     "id": 124,
  //     "text": "Hola2",
  //     "completed": true
  //   },
  //   {
  //     "id": 125,
  //     "text": "Hola3",
  //     "completed": true
  //   }

  // ]
}

