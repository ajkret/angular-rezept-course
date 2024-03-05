import { Component, OnDestroy, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[];
  subscription: Subscription;

  constructor(private slService: ShoppingListService) { }

  ngOnInit(): void {
    this.ingredients = this.slService.getShoppingList();
    this.subscription = this.slService.ingredientsChanged.subscribe((ingredientsList: Ingredient[]) => {
      this.ingredients = ingredientsList;
    });
  }

  ngOnDestroy(): void {
      this.subscription.unsubscribe();
  }
}
