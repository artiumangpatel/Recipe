import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeService } from 'src/app/services/recipe.service';
import{Recipe} from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  // @Output() recipeWasSelected = new EventEmitter<Recipe>();
  
  constructor(private recipeService:RecipeService,
    private router:Router,
    private route:ActivatedRoute) { }
  
  recipes:Recipe[]=[];          //use blank array for store

  // remove array  [
  //    new Recipe('A Test Recipe',  'This is a simply a test', 'https://thumbs.dreamstime.com/z/indian-food-29155366.jpg' ),
  //    new Recipe('A Test Recipe',  'This is a sweet a test', 'https://www.sugarfree-india.com/images/uploads/recipe-images/Sugar-Free-Rabdi-Recipe.jpg' )

  //   ];


  ngOnInit(): void 
  {
    this.recipes = this.recipeService.getRecipes();
  }

  onNewRecipe(){
 this.router.navigate(['new'],{relativeTo:this.route});
  }
  // onRecipeSelected(recipe:Recipe)
  // {
  //   this.recipeWasSelected.emit(recipe);
  // }
}
