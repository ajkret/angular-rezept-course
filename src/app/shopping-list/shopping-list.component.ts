import { Component } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent {
  ingredients: Ingredient[] = [
    new Ingredient('Kakaopulver', 300),
    new Ingredient('Ei', 1),
    new Ingredient('Zucker', 200),
    new Ingredient('Milch', 200),
  ];
  onIngredientAdded(event: Ingredient) {
    this.ingredients.push(event);
  }
}
