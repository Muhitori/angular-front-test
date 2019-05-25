import {Model} from './model';

export class Post extends Model {
  constructor(
    public id: number = null,
    public title: string = null,
    public body: string = null,
    public userId: number = null,
  ) {
    super(id);
  }
}
