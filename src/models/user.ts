import {Model} from './model';

export class User extends Model {
  constructor(
    public id: number = null,
    public title: string = null,
    public body: string = null
  ) {
    super(id);
  }
}
