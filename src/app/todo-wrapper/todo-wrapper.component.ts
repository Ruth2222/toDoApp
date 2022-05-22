import { Component, OnInit } from '@angular/core';
import { IToDo } from '../models/i-to-do';

@Component({
  selector: 'app-todo-wrapper',
  templateUrl: './todo-wrapper.component.html',
  styleUrls: ['./todo-wrapper.component.scss']
})
export class TodoWrapperComponent implements OnInit {
  toDo: IToDo [] = [
  { title: 'test', status: 'open' },
 ];
 
  ngOnInit(): void {
  }

}
