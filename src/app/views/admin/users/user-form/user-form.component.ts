import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { UserService } from 'src/app/services/user.service';
import { User } from '../../../../models/usuario';
import * as Utility from 'src/app/utility';
import { BsModalRef } from 'ngx-bootstrap/modal';


@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  user: User = new User();

  public onClose: any;
  public accion: string;
  public createMessage = 'El usuario ha sido agregado';
  public updateMessage = 'El usuario ha sido modificado';
  public btnSubmit = false;

  constructor(private userService: UserService,
    private messageService: MessageService,
    public bsModalRef: BsModalRef) { }

  ngOnInit() {
  }

  submitForm(formulario: NgForm) {
    this.btnSubmit = true;
    if (!formulario.valid) {
      Utility.validateEmptyFields(formulario);
      this.btnSubmit = false;
      return;
    }

    if (!this.user.idUser) {
      this.create(formulario);
    } else if (this.user.idUser) {
      this.update();
    }
  }

  create(form: NgForm) {
    this.userService.create(this.user).subscribe(
      data => {
        this.messageService.add(
          {severity:'success', summary:this.createMessage}
        );
        form.reset();
        //this.limpiarFormulario();
        this.onClose(true);
        this.btnSubmit = false;
      },
      error => {
        this.messageService.add(
          {severity:'error', summary:error.error}
        );
        this.btnSubmit = false;
      }
    );
  }

  update() {
    this.userService.update(this.user).subscribe(
      data => {
        this.messageService.add(
          {severity:'success', summary:this.updateMessage}
        );
        this.onClose(true);
      },
      error => {        
        this.messageService.add(
          {severity:'error', summary:error.error}
        );
        this.btnSubmit = false;
      }
    );
  }


}
