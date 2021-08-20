import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styles: [
  ]
})
export class BasicsComponent  {

  @ViewChild('myForm') myForm!: NgForm;

  validName():boolean{
    return this.myForm?.controls.product?.invalid && this.myForm?.controls.product?.touched;
  }

  validPrice():boolean{
    return  this.myForm?.controls.price?.touched && (this.myForm?.controls.price?.value <= 0 );
  }

  // save(form: NgForm){
  save(){
    console.log(this.myForm)
  }

}
