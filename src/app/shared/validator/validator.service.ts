import { Injectable } from '@angular/core';
import { AbstractControl, FormControl, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class ValidatorService {
  public fullNamePattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
  public emailPattern: string = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';

  constructor() {}

  cantBeStrider(control: FormControl): ValidationErrors | null {
    const value: string = control.value?.trim().toLowerCase();
    if (value === 'strider') {
      return {
        noStrider: true,
      };
    }
    return null;
  }

  sameValues(value1:string, value2:string){

    return (formGroup:AbstractControl):ValidationErrors|null => {
      const val1 = formGroup.get(value1)?.value;
      const val2 = formGroup.get(value2)?.value;

      if (val1 !== val2) {
        formGroup.get(value2)?.setErrors({
          different: true
        });
        return {
          different: true
        };
      }
      formGroup.get(value2)?.setErrors(null);
      return null;
    }

  }
}
