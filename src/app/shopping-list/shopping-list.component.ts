import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingService } from './shopping.service';


@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  // ingredients: Ingredient[] = [
  //   new Ingredient('Apples', 5),
  //   new Ingredient('Tomatoes', 10)
  // ];

  ingredients: Ingredient[] = [];

  constructor(private shoppingService: ShoppingService) { }

  ngOnInit(): void {
    this.ingredients = this.shoppingService.getIngredients();
    this.shoppingService.ingredientsChanged.subscribe(
      (ingredients: Ingredient[]) => {
        // catch the UPDATED copy of the ingredients array
        // ensure the newest data is being rendered 
        this.ingredients = ingredients;
      }
    )
  }

  updateShoppingList(ingredient) {
    // this.ingredients.push({
    //   name: ingredient.ingredientName,
    //   amount: ingredient.ingredientAmount
    // })
    this.ingredients.push(ingredient)
  }

}
