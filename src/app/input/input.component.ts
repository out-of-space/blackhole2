import { Component, OnInit, Input } from '@angular/core';

import { CommentsService } from '../services/comments.service';
import { text } from '@angular/core/src/render3';
import { HttpClient } from '@angular/common/http';
import {CClass} from '../model/CommentC'
import {CommentsStateService} from '../services/comments-state.service'


@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  constructor(public commentStateService: CommentsStateService){}


    //constructor(private commentsService: CommentsService ) { }
 
    //cat:string ;
    @Input()
    comment: CClass= new CClass();
   

  
  ngOnInit() {

  
  }



 saveComment() {
 

  // console.log(this.cat);
  console.log(this.comment.id);
  console.log(this.comment.text);
  
  this.commentStateService.createComment(this.comment)
  .subscribe(comment => {
   console.log(comment);
   });
}

//   throw() {
//      this._commentService.createComment();
//       console.log("In throw");
//  }
}
