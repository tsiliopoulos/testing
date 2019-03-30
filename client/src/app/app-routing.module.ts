// MEAN Portfolio
// File Name: app-routing.module.ts
// Author: Minseok Choi
// StudentID: 300917184
// Date: 03/29/2019

// Modules
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ProductsComponent } from './pages/products/products.component';
import { ServicesComponent } from './pages/services/services.component';
import { ContactComponent } from './pages/contact/contact.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { TodoListComponent } from './todos/todo-list/todo-list.component';
import { TodoDetailsComponent } from './todos/todo-details/todo-details.component';
import { TodoDeleteComponent } from './todos/todo-delete/todo-delete.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent, data: {title: 'Home'}},
  {path: 'about', component: AboutComponent, data: {title: 'About'}},
  {path: 'products', component: ProductsComponent, data: {title: 'Products'}},
  {path: 'services', component: ServicesComponent, data: {title: 'Services'}},
  {path: 'contact', component: ContactComponent, data: {title: 'Contact'}},
  {path: 'todo-list', component: TodoListComponent, data: {title: 'Todo List'}},
  {path: 'todo-list/add', component: TodoDetailsComponent, data: {title: 'Add Todo'}},
  {path: 'todo-list/edit/:id', component: TodoDetailsComponent, data: {title: 'Edit Todo'}},
  {path: 'todo-list/delete/:id', component: TodoDeleteComponent, data: {title: 'Delete Todo'}},
  {path: 'login', component: LoginComponent, data: {title: 'Login'}},
  {path: 'register', component: RegisterComponent, data: {title: 'Register'}},
  {path: 'logout', redirectTo: '/login', pathMatch: 'full'},

  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
