
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {Observable} from 'rxjs';
import {CClass} from '../model/CommentC'
import { map } from 'rxjs/operators';
import {CommentsService} from './comments.service'

@Injectable({
  providedIn: 'root'
})
export class CommentsStateService {


  comments: CClass[] = [];


  constructor(public commentsService: CommentsService) { }


  getComments(): Observable<CClass[]> {

    return this.commentsService.getComments().pipe(
      map(comments => {
        this.comments = comments;
        return comments;
      })
    );
  }


  createComment(comment: CClass): Observable<CClass>{
    return this.commentsService.createComment(comment).pipe(
      map(comment => {
        this.comments.push(comment);
        return comment;
      })
    );
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

