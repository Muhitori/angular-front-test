import {Model} from './model';

export class User extends Model {
  constructor(
    public id: number = null,
    public name: string = null,
    public username: string = null,
    public email: string = null,
    public address: any = null,
    public phone: string = null,
    public website: string = null,
    public company: any = null
  ) {
    super(id);
  }
}
