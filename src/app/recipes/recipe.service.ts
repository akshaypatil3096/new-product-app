import { EventEmitter, Injectable } from "@angular/core";
import { Ingredients } from "../shared/ingredients.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipes.model";

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();
    private recipes: Recipe[] = [
        new Recipe('A Test Recipe 1',
            'This is test 1',
            'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2018/9/26/0/FNK_Tuscan-Chicken-Skillet_H2_s4x3.jpg.rend.hgtvcom.826.620.suffix/1537973085542.jpeg',
            [
                new Ingredients('Tomatos', 5),
                new Ingredients('Potatos', 3)
            ]
        ),
        new Recipe('A Test Recipe 2',
            'This is test 2',
            'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=960,872',
            [
                new Ingredients('Onion', 4)
            ]
        )
    ];
    
    constructor(private shoppingListService: ShoppingListService){}
    getRecipes() {
        return this.recipes.slice();
    }

    addIngredientsToShoppingList(ingredients: Ingredients[]){
        this.shoppingListService.addIngredients(ingredients);
    }

}