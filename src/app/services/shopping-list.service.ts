import { EventEmitter, Injectable } from '@angular/core';
import { Ingredients } from '../recipes/shared/ingredients.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  ingredientsChanged = new EventEmitter<Ingredients[]>();
  constructor() { }
  private ingredients: Ingredients[] = [
    new Ingredients('Apples',50),
    new Ingredients('Tomato',40)
  ];
  getIngredients(){
    return this.ingredients.slice();
  }

  addIngredient(ingredients:Ingredients){
    this.ingredients.push(ingredients);
   // console.log("ingredients in shopping list"+this.ingredients);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }
  addIngredients(ingredients:Ingredients[]){
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }
}
