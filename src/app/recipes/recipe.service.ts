import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';


// TODO:
// 1) Move RecipeList data arrays into Recipe Service

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor() { }

  // explicitly declare as private so we cannot directly access from outside
  private recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),
    new Recipe('Another Test Recipe', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg')
  ];

  getRecipes() {
    return this.recipes.slice(); // returns a new array which is a COPY of the service array
  }

}
