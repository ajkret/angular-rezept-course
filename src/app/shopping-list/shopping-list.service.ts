import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService {
  ingredientsChanged = new EventEmitter<Ingredient[]>();

  private ingredients: Ingredient[] = [];

  getShoppingList() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

  addIngredients(newIngredients: Ingredient[]) {
    for (const ingredient of newIngredients) {
      this.ingredients.push(ingredient);
    }
    this.ingredientsChanged.emit(this.ingredients.slice());
  }
}