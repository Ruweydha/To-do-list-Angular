import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  tasks:any[] =[];
  getTask(data:string){
    this.tasks.push({id:this.tasks.length, name:data})
    console.log(this.tasks);
  }
  removeTask(id:number){
     this.tasks = this.tasks.filter(data => data.id !== id);
  }
}
