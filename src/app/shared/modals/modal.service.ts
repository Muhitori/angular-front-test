import { Injectable } from '@angular/core';
import * as _ from 'underscore';
import { Subject } from 'rxjs';

@Injectable()
export class ModalService {
  private modals: any[] = [];
  public onClose: Subject<any> = new Subject<any>();

  constructor(  ) { }

  add(modal: any) {
    // add modal to array of active modals
    this.modals.push(modal);
  }

  remove(id: string) {
    // remove modal from array of active modals
    const modalToRemove = _.findWhere(this.modals, { id });
    this.modals = _.without(this.modals, modalToRemove);
  }

  open(id: string, ...args: any[]) {
    // open modal specified by id
    const modal = _.findWhere(this.modals, { id });
    modal.open(...args);
  }

  close(id: string) {
    // close modal specified by id
    const modal = _.find(this.modals, { id });
    modal.close();
  }
}
