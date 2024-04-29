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

  isAddingMode: boolean = false;

  getName(){
    return this.model.user;
  }

  getTodoItems() {
    return this.model.items.filter(item => !item.done);
  }

  printNumOrString(param: string | number): void {
    if ((param as number).toFixed)
    {
      alert((param as number).toFixed(1));
    }
    else
    {
      alert(param as string);
    }
  }

  public get Name(): string { return  "Pavel"; }

  addItem(newItemName: string) {
    this.printNumOrString(newItemName);
    if (newItemName) {
      if (this.model.items.filter(item => item.action == newItemName).length) {
        alert('Item wjth this name already exists');
        return;
      }
      this.model.items.push(new TodoItem(newItemName, false));
    }
  }

  toggleAddForm() {
    this.isAddingMode = !this.isAddingMode;
  }

}

function hello(name: string, ...args: any) {
    
    let s = `Привет ${name}`;
    alert(s);
    for (let i = 0; i < args.length; i++) {
      alert(args[i])
    }
}
