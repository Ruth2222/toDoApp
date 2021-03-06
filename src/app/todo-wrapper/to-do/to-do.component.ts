import { Component, OnInit, Input } from '@angular/core';
import { IToDo } from 'src/app/models/i-to-do';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.scss']
})
export class ToDoComponent implements OnInit {
  @Input () item!: IToDo;

  constructor() { }

  ngOnInit(): void {
  }

}
