import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles: [
  ]
})
export class SwitchesComponent implements OnInit {

  myForm: FormGroup = this.fb.group({
    genre: ['M', Validators.required],
    notifications: [true, Validators.required],
    terms: [false, [Validators.required, Validators.requiredTrue]]
  });

  person = {
    genre: 'F',
    notifications: true
  }

  constructor(private fb:FormBuilder) { }

  ngOnInit(){
    this.myForm.reset({...this.person, terms:false});

    // this.myForm.get('terms')?.valueChanges.subscribe(terms=>{console.log(terms)});

    this.myForm.valueChanges.subscribe(({terms, ...rest}) =>{
      // delete form.term;
      this.person = rest;
    });
  }

  save(){
    const form = {...this.myForm.value};

    delete form.terms;

    console.log(form)

    this.person = form;
  }
}
