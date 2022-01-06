import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingService } from '../shopping-list/shopping.service';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  constructor(private shoppingService: ShoppingService) { }

  // explicitly declare as private so we cannot directly access from outside
  private recipes: Recipe[] = [
    new Recipe(
      'Smoked Salmon Bagel',
      'This open-faced smoked salmon and cream cheese bagel is a great breakfast or brunch offering.',
      'https://www.thespruceeats.com/thmb/S2786ewRbAPNqeH5VdLrwMzgz5I=/940x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/open-face-smoked-salmon-bagel-101094-hero-01-ea26c2ca36af4577b1d40e0af807754b.jpg',
      [
        new Ingredient('Smoked Salmon Slices', 4),
        new Ingredient('Bagel', 1),
        new Ingredient('Cream Cheese', 1)
      ]),
    new Recipe(
      'Canadian Poutine',
      'Poutine is a wonderful and delicious concoction of fries, gravy and cheese curds and is one of the most quintessential Canadian dishes!',
      'https://www.seasonsandsuppers.ca/wp-content/uploads/2014/01/new-poutine-1.jpg',
      [
        new Ingredient('Russet Potatoes', 4),
        new Ingredient('White Cheddar Cheese Curds', 1),
        new Ingredient('Gravy', 1)
      ])
  ];

  getRecipes() {
    return this.recipes.slice(); // returns a new array which is a COPY of the service array
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingService.addIngredients(ingredients);
  }
}

