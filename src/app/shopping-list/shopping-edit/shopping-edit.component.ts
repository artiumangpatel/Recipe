import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Ingredients } from 'src/app/recipes/shared/ingredients.model';
import { ShoppingListService } from 'src/app/services/shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') slForm: NgForm;
  subscription: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedItem: Ingredients;
  //  @ViewChild('nameInput') nameInputRef:ElementRef;
  //  @ViewChild('amountInput') amountInputRef:ElementRef;
  // @Output() ingredientAdded = new EventEmitter<Ingredients>();
  constructor(private slService: ShoppingListService) { }

  ngOnInit() {
    this.subscription = this.slService.startedEditing.subscribe(
      (index: number) => {
        this.editedItemIndex = index;
        this.editMode = true;
        this.editedItem = this.slService.getIngredient(index);
        this.slForm.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount
        })
      }
    );

  }

  onAddItem(form: NgForm) {
    const value = form.value;
    // const ingName = this.nameInputRef.nativeElement.value; // for form
    // const ingAmount = this.amountInputRef.nativeElement.value;
    // const newIngredient = new Ingredients(ingName, ingAmount);
    const newIngredient = new Ingredients(value.name, value.amount);

    this.slService.addIngredient(newIngredient);
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}

