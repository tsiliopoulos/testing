// MEAN Portfolio
// File Name: todo.service.ts
// Author: Minseok Choi
// StudentID: 300917184
// Date: 03/29/2019
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Todo } from '../models/todo';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private user: User;

  private endpoint = 'https://minseokchoi-comp308-assign2.herokuapp.com/api/todo-list/';

  private httpOptions = {
    headers: new HttpHeaders( {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
    })
  };

  constructor(private http: HttpClient) { }

  // Use obserable pattern, subscribe to it and when anything changes we are notified
  public getList(): Observable<any> {
    return this.http.get<any>(this.endpoint, this.httpOptions);
  }

  public getTodo(todo: Todo): Observable<any> {
    return this.http.get<any>(this.endpoint + 'edit/' + todo._id, this.httpOptions);
  }

  // Updating todoList service so it can consume backend API
  public addTodo(todo: Todo): Observable<any> {
    return this.http.post<any>(this.endpoint + 'add', todo, this.httpOptions);
  }

  public editTodo(todo: Todo): Observable<any> {
    return this.http.post<any>(this.endpoint + 'edit/' + todo._id, todo, this.httpOptions );
  }

  public deleteTodo(todo: Todo): Observable<any> {
    return this.http.get<any>(this.endpoint + 'delete/' + todo._id, this.httpOptions);
  }

}
