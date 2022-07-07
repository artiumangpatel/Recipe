import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from '../recipes/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private recipes:Recipe[]=[
    new Recipe('A Test Recipe',  'This is a simply a test', 'https://thumbs.dreamstime.com/z/indian-food-29155366.jpg' ),
    new Recipe('A Test Recipe',  'This is a sweet a test', 'https://www.sugarfree-india.com/images/uploads/recipe-images/Sugar-Free-Rabdi-Recipe.jpg' )

   ];
  constructor() { }
  recipeSelected =new EventEmitter<Recipe>();
  getRecipes(){
    return this.recipes.slice();
  }
}
