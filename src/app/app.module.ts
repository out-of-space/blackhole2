import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InterceptorModule} from './interceptor.module'
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { InputComponent } from './input/input.component';
import { Input2Component } from './input2/input2.component';
import { CommentsComponent } from './comments/comments.component';
import { CommentsService } from './services/comments.service';
import {HttpClientModule} from '@angular/common/http';
import { ReversePipe } from './pipes/reverse.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    InputComponent,
    Input2Component,
    CommentsComponent,
    ReversePipe
    
  ],
  imports: [
    BrowserModule, 
    HttpClientModule,
    FormsModule,
    InterceptorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
