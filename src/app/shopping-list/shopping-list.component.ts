import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Ingredients } from '../recipes/shared/ingredients.model';
import { ShoppingListService } from '../services/shopping-list.service';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredients[];
  private igChangedSub: Subscription;
  constructor(private slService: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.slService.getIngredients();
    this.igChangedSub = this.slService.ingredientsChanged.subscribe((ingredients: Ingredients[]) => { this.ingredients = ingredients; });
  }
  onEditItem(index: number) {
    this.slService.startedEditing.next(index);
  }
  ngOnDestroy(): void {
    this.igChangedSub.unsubscribe();
  }

  // onIngridentAdded(ingredients:Ingredients){
  //   console.log("ingredients  :"+ingredients);
  //   this.ingredients.push(ingredients);
  //   console.log("new ingrident  :"+this.ingredients);

  // }

}
