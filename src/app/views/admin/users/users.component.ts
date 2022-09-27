import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { User } from '../../../models/usuario';
import { ConfirmationService, MessageService } from 'primeng/api';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { UserFormComponent } from './user-form/user-form.component';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  public userList: User[] = [];

  constructor(private userService: UserService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
    private bsModalRef: BsModalRef,
    private modalService: BsModalService,

    ) { }

  ngOnInit() {
    this.getUsers();
  }

  public getUsers(): void{
    this.userService.get().subscribe((data) => {
      this.userList = data;
    })
  }

  public delete(idUser: number): void{
    this.confirmationService.confirm({
      message: '¿Seguro que quieres dar de baja este usuario?',
      acceptLabel: 'Aceptar',
      rejectLabel: 'Cancelar',
      accept: () => {
        this.userService.delete(idUser).subscribe(() => {
          this.messageService.add(
            {severity:'success', summary:'Usuario inhabilitado'}
          );
          this.getUsers();
        })
      }
    });
    
  }

  public create(): void {
    this.bsModalRef = this.modalService.show(UserFormComponent, this.modalOptions);
    this.bsModalRef.content.onClose = (cerrar: boolean) => {
      if (cerrar) {
        this.getUsers();
      }
      this.bsModalRef.hide();
    };
  }
  public update(user: User): void {

    this.bsModalRef = this.modalService.show(UserFormComponent, this.modalOptions);
    this.bsModalRef.content.user = {...user};
    this.bsModalRef.content.onClose = (cerrar: boolean) => {
      if (cerrar) {
        this.getUsers();
      }
      this.bsModalRef.hide();
    };
  }

  modalOptions:Object = {
    animated: true,
    keyboard: false,
    size: 'lg',
    class: 'modal-lg modal-size-lg modal-position-center'
  }
}
