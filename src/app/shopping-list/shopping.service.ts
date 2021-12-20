import { EventEmitter, Injectable, Output } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';


// TODO:
// - manages our shopping list (list of ingredients)
// - the add ingredient method (move from shopping-list component to here)
// - 

@Injectable({
  providedIn: 'root'
})
export class ShoppingService {
  @Output() ingredientsChanged = new EventEmitter<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10)
  ];

  constructor() { }

  getIngredients() {
    return this.ingredients.slice(); // returns a copy only
  }

  addIngredient(n: Ingredient) {
    this.ingredients.push(n);
    // emit the UPDATED copy 
    this.ingredientsChanged.emit(this.ingredients.slice());
  }
}
