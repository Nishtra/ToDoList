import { Component } from '@angular/core';
import {ToDoListItem} from "../app/to-do-list-item";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template: '<div>Hello world</div>',
  styleUrls: ['./app.component.css'],
  styles: ['p {color: red;}']
})
export class AppComponent {
  title = 'ToDoListApp';

  getTitle(): string {
    return this.title;
  }
}
