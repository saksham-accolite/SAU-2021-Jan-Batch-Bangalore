import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  todos: Todo[];

  selectedTodo: Todo;

  onSelect(todo: Todo): void {
    this.selectedTodo = todo;
  }

  getTodos(): void {
    this.todoService.getTodos()
      .subscribe(todos => this.todos = todos.slice(0, 20));
  }

  constructor(private todoService: TodoService) { }

  ngOnInit(): void { 
    this.getTodos();
  }

}
