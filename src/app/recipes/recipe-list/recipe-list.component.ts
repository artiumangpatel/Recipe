import { Component, OnInit } from '@angular/core';
import{Recipe} from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
   recipes:Recipe[]=[
     new Recipe('A Test Recipe',  'This is a simply a test', 'https://thumbs.dreamstime.com/z/indian-food-29155366.jpg' ),
     new Recipe('A Test Recipe',  'This is a sweet a test', 'https://www.sugarfree-india.com/images/uploads/recipe-images/Sugar-Free-Rabdi-Recipe.jpg' )

    ];

   constructor() { }

  ngOnInit(): void {
  }

}
