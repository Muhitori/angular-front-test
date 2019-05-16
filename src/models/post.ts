export class Post {
  id: number;
  title: string;
  userId: number;
  commentId: number;

  constructor(id: number, title: string, userId: number, commentId: number){
    this.id = id;
    this.title = title;
    this.commentId = commentId;
    this.userId = userId;
  }
}
