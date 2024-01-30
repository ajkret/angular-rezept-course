import { RouterModule, Routes } from "@angular/router";
import { ShoppingListEditComponent } from "./shopping-list/shopping-list-edit/shopping-list-edit.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { IngredientComponent } from "./shopping-list/ingredient/ingredient.component";
import { RecipesComponent } from "./recipes/recipes.component";
import { RecipeListComponent } from "./recipes/recipe-list/recipe-list.component";
import { RecipeDetailComponent } from "./recipes/recipe-detail/recipe-detail.component";
import { RecipeEditComponent } from "./recipes/recipe-edit/recipe-edit.component";
import { NgModule } from "@angular/core";
import { ErrorPageComponent } from "./error-page/error-page.component";
import { RecipesStartComponent } from "./recipes/recipes-start/recipes-start.component";

export const applicationRoutes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: "full" },
  {
    path: 'shopping-list', component: ShoppingListComponent, children: [
      { path: 'edit', component: ShoppingListEditComponent },
      { path: 'ingredient', component: IngredientComponent }
    ]
  },
  {
    path: 'recipes', component: RecipesComponent, children: [
      { path: '', component: RecipesStartComponent, pathMatch: 'full' },
      { path: 'list', component: RecipeListComponent },
      { path: 'new', component: RecipeEditComponent },
      { path: ':id', component: RecipeDetailComponent },
      { path: ':id/edit', component: RecipeEditComponent },
    ]
  },
  { path: 'not-found', component: ErrorPageComponent, data: { message: 'Seite nicht gefundem!' } },
  { path: '**', redirectTo: '/not-found' }
]

@NgModule({
  imports: [
    RouterModule.forRoot(applicationRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ApplicationRoutingModule {

}