import { EventEmitter } from "@angular/core";
import { Ingredients } from "../shared/ingredients.model";

export class ShoppingListService {
    ingredientsChanged = new EventEmitter<Ingredients[]>();
    private ingredients: Ingredients[] = [new Ingredients('Apples', 5), new Ingredients('Tomatos', 5)];
    tempIng: Ingredients[] = [];
    totalAmount: number = 0;
    totalIngredients: Ingredients[] = [];
    getIngredients() {
        return this.ingredients.slice();
    }

    addIngredient(ingredient: Ingredients) {
        this.ingredients.push(ingredient);
        this.ingredientsChanged.emit(this.ingredients.slice());
    }

    addIngredients(i: Ingredients[]) {
       
        var flag = false;
        for (let l = 0; l < i.length; l++) {
            flag = false;
            for (let k = 0; k < this.ingredients.length; k++) {
                if (i[l].name === this.ingredients[k].name) {
                    this.ingredients[k].amount  += i[l].amount;
                    flag = true;
                    break;
                }
            }
            if (flag === false) {
                this.ingredients.push(i[l]);
            }
        }
        this.ingredientsChanged.emit(this.ingredients.slice());
    }
}