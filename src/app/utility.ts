import { NgForm } from "@angular/forms";

export function validateEmptyFields(form: NgForm): void {
    Object.keys(form.controls).forEach((name) => {
      const control = form.controls[name];
      control.markAsTouched({ onlySelf: true });
      control.markAsDirty({ onlySelf: true });
    });
  }

  export function validatePassword(form: NgForm): void {
    if(form.controls['password'] != form.controls['confirmPassword']){
      form.controls['password'].markAsTouched({ onlySelf: true });
      form.controls['password'].markAsDirty({ onlySelf: true });
      form.controls['confirmPassword'].markAsTouched({ onlySelf: true });
      form.controls['confirmPassword'].markAsDirty({ onlySelf: true });
    }
  }
  