import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Recipe } from '../../recipes.model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent {
  @Input() recipe: Recipe;
  @Output() recipeSelected = new EventEmitter<void>();

  constructor(private recipeService: RecipeService) { }

  onSelected($event: any) {
    console.log('Recipe selected');
    this.recipeService.recipeSelected.emit(this.recipe);
  }
}
