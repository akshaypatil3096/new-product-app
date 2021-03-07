import { Component, Input, OnInit, Output } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipes.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() selectedRecipe: Recipe;
  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
  }

  onAddToComponentList() {
    this.recipeService.addIngredientsToShoppingList(this.selectedRecipe.ingredients);
  }
}
