import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe:Recipe; //Recipe is interface recipe.model.ts and Input recipe is comefrom recipe-list [recipe]
  constructor() { }

  ngOnInit(): void {
  }

}
