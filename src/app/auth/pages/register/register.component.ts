import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { cantBeStrider, emailPattern, fullNamePattern } from 'src/app/shared/validator/validations';
import { ValidatorService } from '../../../shared/validator/validator.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [
  ]
})
export class RegisterComponent implements OnInit {

  myForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.pattern(this.validatorService.fullNamePattern)]],
    email: ['', [Validators.required, Validators.pattern(this.validatorService.emailPattern)]],
    username: ['', [Validators.required,this.validatorService.cantBeStrider]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    confirmPassword: ['', [Validators.required, ]]
  },{
    validators: [this.validatorService.sameValues('password','confirmPassword')]
  })

  constructor(private fb:FormBuilder, private validatorService:ValidatorService) { }

  ngOnInit(): void {
    this.myForm.reset({
      name: 'Francisco Arce',
      email: 'fraarce@hotmail.com',
      username: 'fraarce'
    })
  }

  isValid(control:string){
    return this.myForm.get(control)?.invalid && this.myForm.get(control)?.touched;
  }

  submitForm(){
    console.log(this.myForm.value);
    this.myForm.markAllAsTouched();
  }
}
