
import { Component, Input, OnInit  } from '@angular/core';
import { RecipeService } from 'src/app/services/recipe.service';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe:Recipe; //Recipe is interface recipe.model.ts and Input recipe is comefrom recipe-list [recipe]
  
  // @Output() recipeSelected = new EventEmitter<any>();
  constructor(private recipeService:RecipeService) { }

  ngOnInit(): void {
  }
  onselected(){
//  this.recipeSelected.emit();
this.recipeService.recipeSelected.emit(this.recipe);
console.log("recipe selected in recipe item"+this.recipeService);
//  console.log("recipeSelected:   "+this.recipeSelected);
  }
}


