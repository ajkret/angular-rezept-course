import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent {
  @ViewChild('nameInput') nameInput:ElementRef;
  @ViewChild('amountInput') amountInput:ElementRef;

  constructor(private slService:ShoppingListService) {}
  onAddIngredient() {
    const ingredient = new Ingredient(this.nameInput.nativeElement.value,this.amountInput.nativeElement.value);
    this.slService.addIngredient(ingredient);

  }
}
