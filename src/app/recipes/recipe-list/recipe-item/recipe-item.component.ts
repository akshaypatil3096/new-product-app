import { Component, Input, OnInit } from '@angular/core';
import { RecipeService } from '../../recipe.service';
import { Recipe } from '../../recipes.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipeItem: Recipe;
  constructor(private recipeSevice: RecipeService) { }
  ngOnInit(){
  }

  onSelected() {
    this.recipeSevice.recipeSelected.emit(this.recipeItem);
  }
}
