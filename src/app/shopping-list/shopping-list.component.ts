import { Component, OnInit } from '@angular/core';
import { Ingredients } from '../recipes/shared/ingredients.model';
import { ShoppingListService } from '../services/shopping-list.service';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredients[];
   
  constructor(private slService:ShoppingListService) { }

  ngOnInit() {
    this.ingredients=this.slService.getIngredients();
    this.slService.ingredientsChanged.subscribe((ingredients:Ingredients[])=>{this.ingredients=ingredients;});
  }
  // onIngridentAdded(ingredients:Ingredients){
  //   console.log("ingredients  :"+ingredients);
  //   this.ingredients.push(ingredients);
  //   console.log("new ingrident  :"+this.ingredients);

  // }

}
