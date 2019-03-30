// MEAN Portfolio
// File Name: app.module.ts
// Author: Minseok Choi
// StudentID: 300917184
// Date: 03/29/2019

// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

// COmponents
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './partials/header/header.component';
import { FooterComponent } from './partials/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ProductsComponent } from './pages/products/products.component';
import { ServicesComponent } from './pages/services/services.component';
import { ContactComponent } from './pages/contact/contact.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { TodoListComponent } from './todos/todo-list/todo-list.component';
import { TodoDetailsComponent } from './todos/todo-details/todo-details.component';
import { TodoDeleteComponent } from './todos/todo-delete/todo-delete.component';


// Services
import { FlashMessagesModule, FlashMessagesService } from 'angular2-flash-messages';
import { AuthService } from './services/auth.service';
import { JwtModule, JwtHelperService, JwtInterceptor } from '@auth0/angular-jwt';


export function jwtTokenGetter() {
  return localStorage.getItem('id_token');
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ProductsComponent,
    ServicesComponent,
    ContactComponent,
    PageNotFoundComponent,
    TodoListComponent,
    RegisterComponent,
    LoginComponent,
    TodoDetailsComponent,
    TodoDeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FlashMessagesModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: jwtTokenGetter
      }
    })

  ],
  providers: [FlashMessagesService],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
