import { Component } from '@angular/core';

import { Model, TodoItem } from './model'

@Component({
  selector: 'todo-app',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'todo';
  model = new Model();

  getName(){
    return this.model.user;
  }

  getTodoItems() {
    return this.model.items.filter(item => !item.done);
  }

  addItem(newItemName: string) {
    if (newItemName) {
      if (this.model.items.filter(item => item.action == newItemName).length) {
        alert('Item wjth this name already exists');
        return;
      }
      this.model.items.push(new TodoItem(newItemName, false));
    }
  }
}
