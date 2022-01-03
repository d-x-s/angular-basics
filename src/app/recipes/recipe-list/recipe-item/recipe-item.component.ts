import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../../recipe.model';
// import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipeBinded: Recipe;
  @Input() index: number;

  constructor() { }

  ngOnInit(): void {
  }

  // onItemSelect() {
  //   this.recipeService.recipeSelected.emit(this.recipeBinded);
  // }
}

