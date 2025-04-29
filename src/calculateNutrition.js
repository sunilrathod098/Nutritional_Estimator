import nutritionDB from "../data/nutritionDB.json" assert { type: 'json' };

function calculateNutrition(mappedIngredients) {
    const total = {
        calories: 0,
        protein: 0,
        carbs: 0,
        fat: 0,
        fiber: 0
    };

    for ( const {name, grams} of mappedIngredients) {
        const nutrition = nutritionDB[name];
        if (!nutrition || !grams){
            console.error(`Nutrition data not found for ${name}`);
            continue;
        }

        if (!name || !grams){
            console.warn(`Skipping unmapped ingredients: ${ingredient}`);
            return null
        }

        for ( const key in total) {
            total[key] += (nutrition[key] * grams) / 100;
        }
    }
    return total;
}


export default calculateNutrition;