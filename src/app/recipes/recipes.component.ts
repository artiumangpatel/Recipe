import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../services/recipe.service';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers:[RecipeService]
})
export class RecipesComponent implements OnInit {
    recipes=[];
    selectedRecipe:Recipe;
  constructor() { }

  ngOnInit(): void {
    // this.recipeService.recipeSelected.subscribe((recipe:Recipe)=>{this.selectedRecipe=recipe;});
  }

}
