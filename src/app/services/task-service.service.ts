import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {

  removeTask(id:number){
    console.log(this.tasks);
    this.tasks = this.tasks.filter(task => task.id !== id )
    console.log(this.tasks);
    console.log("el id llego hasta component",id);

  }
    
  
  addTask(value: string) {
    this.tasks.unshift({
      "id": this.tasks.length+1,
      "text": value,
      "completed": false
    })
  }

  checkTask(taskDone:any){
    if(taskDone.completed){
      taskDone.completed=false;
    }else{
      taskDone.completed=true;
    } 
}

  getTasks():any[]{
    return this.tasks; 
  }



  tasks: any[] = [
    {
      "id": 123,
      "text": "Hola",
      "completed": true
    },
    {
      "id": 124,
      "text": "Hola2",
      "completed": true
    },
    {
      "id": 125,
      "text": "Hola3",
      "completed": true
    }

  ]

  constructor() { }
}
