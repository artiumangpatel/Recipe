import { Component, ElementRef, EventEmitter, OnInit, ViewChild,Output } from '@angular/core';
import { Ingredients } from 'src/app/recipes/shared/ingredients.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
   @ViewChild('nameInput') nameInputRef:ElementRef;
   @ViewChild('amountInput') amountInputRef:ElementRef;
  @Output() ingredientAdded = new EventEmitter<Ingredients>();
  constructor() { }

  ngOnInit(): void {
  }
  onAddItem(){
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmount = this.amountInputRef.nativeElement.value;
    const newIngrident = new Ingredients(ingName,ingAmount);
    console.log("newIngrident" + newIngrident);
    this.ingredientAdded.emit(newIngrident);
  }
}
