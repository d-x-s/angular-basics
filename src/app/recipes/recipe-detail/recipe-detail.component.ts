import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  id: number;

  constructor(private recipeService: RecipeService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    // only works for the first time we load a detail component
    // const id = this.route.snapshot.params['id'];

    // use subscription to ensure we can react to changes
    // don't forget to cast string to number with +
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.recipe = this.recipeService.getRecipe(this.id);
      }
    );
  }

  onAddToShoppingList() {
  }

  navigateToEditRoute() {
    this.router.navigate(['edit'], {relativeTo: (this.route)});

    // alternative method, not as straightforward
    // go up 1 level (to recipes), then add our id, then edit
    // this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.route});
  }

}
