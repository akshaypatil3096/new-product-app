import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe } from '../../recipes.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Output() recipeSeleced = new EventEmitter<void>();
  constructor() { }
  @Input() recipeItem: Recipe;
  ngOnInit(): void {
  }

  onSelected() {
    this.recipeSeleced.emit();
  }
}
