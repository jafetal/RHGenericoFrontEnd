import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { UsersRoutingModule } from './users.routing.module';
import { UserService } from 'src/app/services/user.service';
import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmationService, MessageService} from 'primeng/api';
import {ToastModule} from 'primeng/toast';
import { ModalModule } from 'ngx-bootstrap/modal';
import { UserFormComponent } from './user-form/user-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    UsersRoutingModule,
    CommonModule,
    TableModule,
    ButtonModule,
    ConfirmDialogModule,
    ToastModule,
    ModalModule.forChild(),
    FormsModule,
    ReactiveFormsModule
  ],
  entryComponents: [UserFormComponent],
  declarations: [UsersComponent,UserFormComponent],
  providers: [UserService,
    ConfirmationService,
    MessageService]
})
export class UsersModule { }
