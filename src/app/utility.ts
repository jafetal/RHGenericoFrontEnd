import { NgForm } from "@angular/forms";

export function validateEmptyFields(form: NgForm): void {
    Object.keys(form.controls).forEach((name) => {
      const control = form.controls[name];
      control.markAsTouched({ onlySelf: true });
      control.markAsDirty({ onlySelf: true });
    });
  }
  