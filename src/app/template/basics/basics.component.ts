import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styles: [
  ]
})
export class BasicsComponent  {


  save(form: NgForm){
    console.log(form.value)
  }

}
