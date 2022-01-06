import { Component, OnInit } from '@angular/core';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  // we put the service in this provider array because it is a parent of the other recipe components
  providers: [RecipeService]
})
export class RecipesComponent implements OnInit {

  constructor() { }

  // note: this observable is managed by Angular so we do need to clean it up
  ngOnInit(): void {
  }

}
