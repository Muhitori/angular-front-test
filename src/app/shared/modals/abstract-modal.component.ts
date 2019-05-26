import { ElementRef, OnInit, OnDestroy } from '@angular/core';
import $ from 'jquery';
import { ModalService } from './modal.service';


export abstract class AbstractModal implements OnInit, OnDestroy {
  protected element: any;
  public isHidden: boolean;

  protected id: string;

  protected constructor(
    protected modalService: ModalService,
    protected el: ElementRef,
  ) {
    this.element = $(el.nativeElement);
  }

  ngOnInit() {
    this.isHidden = true;
    this.element.hide();
    const modal = this;

    if (!this.id) {
      console.error('modal must have an id');
      return;
    }
    this.element.appendTo('body');

    this.element.on('click', (e: any) => {
      const target = $(e.target);
      if (!target.closest('.modal').length) {
        modal.close();
      }
    });
    this.modalService.add(this);
  }

  ngOnDestroy(): void {
    this.modalService.remove(this.id);
    this.element.remove();
  }

  open(...args: any[]): void {
    this.isHidden = false;
    this.element.show();
  }

  close(): void {
    this.modalService.onClose.next(this);
    this.element.fadeOut();
    this.isHidden = true;
  }
}
