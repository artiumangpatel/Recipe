import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from '../recipes/recipe.model';
import { Ingredients } from '../recipes/shared/ingredients.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private recipes:Recipe[]=[
    new Recipe('A Test Recipe', 
     'This is a simply a test', 
     'https://thumbs.dreamstime.com/z/vegetarian-burger-home-made-chickpea-cutlet-vegetables-veg-concept-copy-space-fresh-153187934.jpg'
     ,[new Ingredients('aloo-tikki',1),
       new Ingredients('lecctus',2)] ),
    new Recipe('A Test Recipe',  
    'This is a sweet a test',
     'https://www.sugarfree-india.com/images/uploads/recipe-images/Sugar-Free-Rabdi-Recipe.jpg' 
     ,
     [new Ingredients('milk',6),
     new Ingredients('sugar',2)] )

   ];
  constructor() { }
  recipeSelected =new EventEmitter<Recipe>();
  getRecipes(){
    return this.recipes.slice();
  }
}
