import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from './todo';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class TodoService {

  private todosUrl: string = "https://jsonplaceholder.typicode.com/todos";

  constructor(private httpClient: HttpClient) { }

  getTodos(): Observable<Todo[]> {
    return this.httpClient.get<Todo[]>(this.todosUrl);
  }

  getTodo(id: number): Observable<Todo> {
    return this.httpClient.get<Todo>(this.todosUrl + "/" + id);
  }

}
