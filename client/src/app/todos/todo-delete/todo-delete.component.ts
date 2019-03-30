// MEAN Portfolio
// File Name: todo-delete.component.ts
// Author: Minseok Choi
// StudentID: 300917184
// Date: 03/29/2019
import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router, ActivatedRoute } from '@angular/router';
import { Todo } from 'src/app/models/todo';

@Component({
  selector: 'app-todo-delete',
  templateUrl: './todo-delete.component.html',
  styleUrls: ['./todo-delete.component.css']
})
export class TodoDeleteComponent implements OnInit {
  title: string;
  todo: Todo;

  constructor(
    private activatedRoute: ActivatedRoute,
    private flashMessage: FlashMessagesService,
    private todoService: TodoService,
    private router: Router
  ) { }

  ngOnInit() {
    this.title = this.activatedRoute.snapshot.data.title;
    this.todo = new Todo();

    this.activatedRoute.params.subscribe(params => {
      this.todo._id = params.id;
    });

    this.deleteTodo(this.todo);
  }

  deleteTodo(todo: Todo): void {
    this.todoService.deleteTodo(todo).subscribe(data => {
      if (data.success) {
        this.flashMessage.show(data.msg, { cssClass: 'alert-warning', timeOut: 3000 });
        this.router.navigate(['/todo-list']);
      } else {
        this.flashMessage.show('Delete Todo Failed', { cssClass: 'alert-danger', timeOut: 3000 });
        this.router.navigate(['/todo-list']);
      }
    });
  }


}
