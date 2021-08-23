import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styles: [
  ]
})
export class BasicsComponent implements OnInit {

  // myForm: FormGroup = new FormGroup({
  //   'name': new FormControl('RTX 4000Ti'),
  //   'price': new FormControl(0),
  //   'quantity': new FormControl(0),
  // })

  myForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    price: [0, [Validators.required, Validators.min(1)]],
    quantity: [0, [Validators.required, Validators.min(1)]],
  })

  constructor(private fb: FormBuilder) { }

  ngOnInit(){
    this.myForm.reset({
      name: 'RTX',
      price: '1500'
    })
  }

  isValid(control:string){
    return this.myForm.controls[control]?.errors && this.myForm.controls[control]?.touched;
  }

  save(){
    if(this.myForm.invalid)
    {
      this.myForm.markAllAsTouched();
      return;
    }
    console.log(this.myForm.value);
    this.myForm.reset();
  }
}
