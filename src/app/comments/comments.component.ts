import { Component, OnInit } from '@angular/core';
import { CommentsService } from '../services/comments.service';
import {CommentsStateService} from '../services/comments-state.service'

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  public comments = [];
  public errorMsg;
  constructor(public commentsStateService: CommentsStateService) { }

  ngOnInit() {
    this.commentsStateService.getComments().subscribe(
      comments => {
      console.log("success!")
      this.commentsStateService.comments = comments;
      }
    );
  }
  ngOnChanges() {

  }

}

// ngOnInit() {
//   this._commentService.getComments()
//       .subscribe(data => this.comments = data);
// }