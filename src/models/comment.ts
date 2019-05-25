import {Model} from './model';

export class Comment extends Model {
  constructor(
    public id: number = null,
    public name: string = null,
    public body: string = null) {
    super(id);
  }
}
