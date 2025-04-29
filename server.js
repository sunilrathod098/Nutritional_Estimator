import express from "express";
import calculateNutrition from "./src/calculateNutrition.js";
import classifyDish from "./src/classifyDish.js";
import convertToGrams from "./src/connvertQuantities.js";
import fetchRecipe from "./src/fetchRecipe.js";
import mapIngredient from "./src/mapIngredients.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/nutrition', async (req, res) => {
    try {
        const dish = req.query.dish;
        if (!dish) {
            return res.status(400).json({ error: "Dish name is required." });
        }
        const recipe = await fetchRecipe(dish);
        console.log("Fetched Recipe:", recipe);

        if (!recipe || !Array.isArray(recipe) || recipe.length === 0) {
            return res.status(404).json({ error: "Recipe not found or invalid." });
        }
        const mappedIngredients = recipe.map(({ ingredient, quantity }) => {
            const name = mapIngredient(ingredient);
            const grams = convertToGrams(quantity);
            if (!name || !grams) {
                console.warn(`Skipping unmapped ingredients: ${ingredient}`);
                return null;
            }
            return { name, grams };
        }).filter(Boolean);

        if (mappedIngredients.length === 0) {
            return res.status(400).json({ error: "No valid ingredients could be processed." });
        }

        const nutrition = calculateNutrition(mappedIngredients);
        const dishType = classifyDish(dish) || "Unknown";

        const totalCookedWeight = 800;
        const standardServingSize = 180;
        const factor = standardServingSize / totalCookedWeight;
        if (factor <= 0) {
            return res.status(400).json({ error: "Invalid factor calculated for serving size." });
        }

        const nutritionPerServing = {};
        ['calories', 'protein', 'carbs', 'fat', 'fiber'].forEach(key => {
            nutritionPerServing[key] = Math.round(nutrition[key] * factor);
        });

        const result = {
            estimated_nutrition_per_200ml_katori: nutritionPerServing,
            dish_type: dishType,
            ingredients_used: recipe
        };
        res.json(result);


    } catch (error) {
        console.error("Error fetching recipe:", error);
        res.status(500).json({ error: "Internal server error" });
    }
})

app.get('/', (_, res) => {
    res.send('Welcome to the Nutrition API');
})

const PORT = 4000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})