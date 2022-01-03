import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

const appRoutes: Routes = [
  // default matching strategy is prefix matching
  // of course the empty path is part of every path
  // thus we must override default behavior
  // this only redirects if the FULL path is empty!
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },

  { path: 'recipes', component: RecipesComponent },

  { path: 'shopping-list', component: ShoppingListComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
