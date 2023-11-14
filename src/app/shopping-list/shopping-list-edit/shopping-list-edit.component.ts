import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent {
  @ViewChild('nameInput') nameInput:ElementRef;
  @ViewChild('amountInput') amountInput:ElementRef;
  @Output() addIngredientEvent = new EventEmitter<Ingredient>();

  onAddIngredient() {
    this.addIngredientEvent.emit(new Ingredient(this.nameInput.nativeElement.value,this.amountInput.nativeElement.value));
  }
}
