import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Ingredients } from 'src/app/recipes/shared/ingredients.model';
import { ShoppingListService } from 'src/app/services/shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  //  @ViewChild('nameInput') nameInputRef:ElementRef;
  //  @ViewChild('amountInput') amountInputRef:ElementRef;
  // @Output() ingredientAdded = new EventEmitter<Ingredients>();
  constructor(private slService: ShoppingListService) { }

  ngOnInit() {
  }

  onAddItem(form: NgForm) {
    const value = form.value;
    // const ingName = this.nameInputRef.nativeElement.value; // for form
    // const ingAmount = this.amountInputRef.nativeElement.value;
    // const newIngredient = new Ingredients(ingName, ingAmount);
    const newIngredient = new Ingredients(value.name, value.amount);

    this.slService.addIngredient(newIngredient);
  }
}

