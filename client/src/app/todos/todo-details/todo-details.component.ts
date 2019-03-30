// MEAN Portfolio
// File Name: todo-details.component.ts
// Author: Minseok Choi
// StudentID: 300917184
// Date: 03/29/2019
import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router, ActivatedRoute } from '@angular/router';
import { Todo } from 'src/app/models/todo';


@Component({
  selector: 'app-todo-details',
  templateUrl: './todo-details.component.html',
  styleUrls: ['./todo-details.component.css']
})
export class TodoDetailsComponent implements OnInit {

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
    this.todo = new Todo();   // create a new Todo object

    this.activatedRoute.params.subscribe(params => {
      this.todo._id = params.id;
    });

    if (this.title === 'Edit Todo') {
      this.getTodo(this.todo);
    }
  }

  // pull the data
  private getTodo(todo: Todo): void {
    this.todoService.getTodo(todo).subscribe(data => {
      this.todo = data.todo;
    });
  }

  onDetailsPageSubmit(): void {
    switch (this.title) {
      case 'Add Todo':
      this.todoService.addTodo(this.todo).subscribe(data => {
        if(data.success) {
          this.flashMessage.show(data.msg, {cssClass: 'alert-success', timeOut: 3000});
          this.router.navigate(['/todo-list']);
        } else {
          this.flashMessage.show('Add Todo Failed', {cssClass: 'alert-danger', timeOut: 3000});
          this.router.navigate(['/todo-list']);
        }
      });
      break;

      case 'Edit Todo':
      this.todoService.editTodo(this.todo).subscribe(data => {
        if (data.success) {
          this.flashMessage.show(data.msg, {cssClass: 'alert-success', timeOut: 3000});
          this.router.navigate(['/todo-list']);
        } else {
          this.flashMessage.show('Edit Todo Failed', {cssClass: 'alert-danger', timeOut: 3000});
          this.router.navigate(['/todo-list']);
        }
      });
      break;

    }
  }
}
