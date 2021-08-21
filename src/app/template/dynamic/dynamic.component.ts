import { Component } from '@angular/core';

interface Person {
  name: string;
  favorites: Favorite[];
}
interface Favorite{
  id:number;
  name:string;
}

@Component({
  selector: 'app-dynamic',
  templateUrl: './dynamic.component.html',
  styles: [
  ]
})
export class DynamicComponent {
  newFavorite:string='';
  person: Person = {
    name: 'Francisco',
    favorites: [
      {
        id:1,
        name:'One Piece'
      },
      {
        id:2,
        name:'Tokyo Revenge'
      }
    ]
  }

  save(){
console.log('post form')
  }

addFavorite(){
  const favorite:Favorite = {
    id: this.person.favorites.length,
    name: this.newFavorite
  }
  this.person.favorites.push({...favorite});
  this.newFavorite = '';
}

  delete(index:number){
this.person.favorites.splice(index,1);
  }
}
