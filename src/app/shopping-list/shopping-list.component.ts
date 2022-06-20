import { Component, OnInit } from '@angular/core';
import { Ingredients } from '../recipes/shared/ingredients.model';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredients[] = [
    new Ingredients('Apples',50),
    new Ingredients('Tomato',40)
  ];
  constructor() { }

  ngOnInit(): void {
  }
  onIngridentAdded(ingredients:Ingredients){
    console.log("ingredients  :"+ingredients);
    this.ingredients.push(ingredients);
    console.log("new ingrident  :"+this.ingredients);

  }

}
