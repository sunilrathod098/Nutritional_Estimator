import fetchRecipe from "./fetchRecipe.js";
import mapIngredient from "./mapIngredients.js";
import convertToGrams from "./connvertQuantities.js";
import calculateNutrition from "./calculateNutrition.js";
import classifyDish from "./classifyDish.js";
import readline from "readline-sync";


async function run() {
    try {
        const dish = readline.question("Enter dish name: ").trim();
        if (!dish) {
            console.error("Dish name cannot be empty.");
            return;
        }
    
        const recipe = fetchRecipe(dish);
        if (!recipe || !Array.isArray(recipe) || recipe.length === 0) {
            console.error("Recipe not found or invalid.");
            return;
            }
    
        const mappedIngredients = recipe.map(({
            ingredient, quantity
        }) => {
            const name = mapIngredient(ingredient);
            const grams = convertToGrams(quantity);
            if (!name || !grams){
                console.warn(`Skipping unmapped ingredients: ${ingredient}`);
                return null
            }
            return { name, grams}
        }).filter(Boolean);
    
        if (!mappedIngredients.length === 0) {
            console.error('No Valid ingredients could ve processed. Aborting.');
            return;
        }
    
        const nutrition = calculateNutrition(mappedIngredients);
        const dishType = classifyDish(dish) || "Unknown";
    
        const totalCookedWeight = 800;
        const standardServingSize = 180;
        const factor = standardServingSize / totalCookedWeight;
        if (factor <= 0) {
            console.error("Invalid factor calculated for serving size.");
            return;
        }
    
        const nutritionPerServing = {};
        ['calories', 'protein', 'carbs', 'fat', 'fiber'].forEach(key => {
            nutritionPerServing[key] = Math.round(nutrition[key] * factor);
        });
    
        const result = {
            estimated_nutrition_per_200ml_katori: nutritionPerServing,
            dish_type: dishType,
            ingredients_used: recipe
        }
        console.log("\nEstimated Nutrition Info:");
        console.log(JSON.stringify(result, null, 2));
    } catch (error) {
        console.error("An unexpected error occurred: ", error.message);
    }
}

run();