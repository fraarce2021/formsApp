import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dynamic',
  templateUrl: './dynamic.component.html',
  styles: [
  ]
})
export class DynamicComponent implements OnInit {

  myForm: FormGroup = this.fb.group({
    name: ['',[Validators.required, Validators.minLength(3)]],
    favorites: this.fb.array([
      ['One Piece', Validators.required],
      ['Tokyo Revengers', Validators.required]
    ], Validators.required)
  });

  newFavorite: FormControl = this.fb.control('', Validators.required);

  get favoritesArr()
  {
    return this.myForm.get('favorites') as FormArray;
  }

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
  }

  add(){
    if (this.newFavorite.invalid) {
      return;
    }
    // this.favoritesArr.push(new FormControl(this.newFavorite.value, Validators.required));
    this.favoritesArr.push(this.fb.control(this.newFavorite.value, Validators.required ));
    this.newFavorite.reset();
  }
  delete(index:number){
    this.favoritesArr.removeAt(index);
  }
  isValid(control:string){
    return this.myForm.controls[control]?.errors && this.myForm.controls[control]?.touched;
  }

  save(){
    if(this.myForm.invalid){
      this.myForm.markAllAsTouched();
      return;
    }
    console.log(this.myForm.value)
    this.myForm.reset();
  }

}
