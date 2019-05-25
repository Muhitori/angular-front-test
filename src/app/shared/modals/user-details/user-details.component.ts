import { Component, ElementRef, OnInit } from '@angular/core';
import { User } from '../../../../models/user';
import { UserService } from '../../../../services/user.service';
import { ModalService } from '../modal.service';
import { AbstractModal } from '../abstract-modal.component';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: [
    '../abstract-modal.component.scss',
    './user-details.component.css'
  ]
})
export class UserDetailsComponent extends AbstractModal implements OnInit {
  public static readonly ID = 'user-details';
  public user: User;
  protected id = UserDetailsComponent.ID;

  constructor(
    protected modalService: ModalService,
    protected el: ElementRef,
    private userService: UserService
  ) {
    super(modalService, el);
  }

  ngOnInit() {
    super.ngOnInit();
  }

  open(userId: number): void {
    super.open();
    this.getUser(userId);
  }

  getUser(userId: number): void {
    this.userService.getUser(userId).subscribe(
      response => {
        this.user = response[0];
      }
    );
  }

}
