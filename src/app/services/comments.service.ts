import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {Observable} from 'rxjs';
import {CClass} from '../model/CommentC'
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'}
)


export class CommentsService {

  comments: CClass[] = [];


  url: string = 'https://blackhole2a.herokuapp.com/posts';
  //url: string ='https://api.myjson.com/bins/h6dug'
  //url: string ="http://localhost:3000/blackhole";
  //url: string ="http://localhost:8080/blackhole";
  //private _url: string ="https://my-json-server.typicode.com/smanol/blackhole/comments";
  //private _url: string ="http://localhost:8080/comments";



  constructor(public httpClient: HttpClient) { }

  getComments(): Observable<CClass[]> {
    return this.httpClient.get<CClass[]>(this.url)       
  }


  createComment(comment: CClass): Observable<CClass>{
    return this.httpClient.post<CClass>(this.url, comment);
  }
    
        
 }  
 



  // throwComment() {
    
  //   this.http.post(this._url,  {
  //     id:24,
  //     text:'hello'
  //   }).subscribe(
  //     (data:any) => {
  //       console.log(data)
  //     }


  
  //   )
     
    
  // }

