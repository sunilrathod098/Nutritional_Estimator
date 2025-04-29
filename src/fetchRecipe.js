const recipes = {
    "Paneer Butter Masala": [
        { ingredient: "Paneer", quantity: "0.75 cup cubes" },
        { ingredient: "Butter", quantity: "2 teaspoons" },
        { ingredient: "Tomato", quantity: "0.5 cup puree" },
        { ingredient: "Onion", quantity: "0.5 cup chopped" },
        { ingredient: "Cream", quantity: "1 tablespoon" },
    ],
    "Rajma": [
        { ingredient: "Rajma", quantity: "1 cup boiled" },
        { ingredient: "Onion", quantity: "0.5 cup chopped" },
        { ingredient: "Tomato", quantity: "0.5 cup puree" },
        { ingredient: "Oil", quantity: "1 tablespoon" },
        { ingredient: "Garlic", quantity: "1 teaspoon minced" }
    ],
    "Aloo Gobi": [
        { ingredient: "Potato", quantity: "1 cup diced" },
        { ingredient: "Cauliflower", quantity: "1 cup florets" },
        { ingredient: "Onion", quantity: "0.5 cup sliced" },
        { ingredient: "Tomato", quantity: "0.25 cup puree" },
        { ingredient: "Oil", quantity: "1 tablespoon" }
    ],
    "Moong Dal": [
        { ingredient: "Moong Dal", quantity: "0.75 cup boiled" },
        { ingredient: "Onion", quantity: "0.25 cup chopped" },
        { ingredient: "Ghee", quantity: "1 teaspoon" },
        { ingredient: "Garlic", quantity: "1 teaspoon" },
        { ingredient: "Green Chili", quantity: "1 piece" }
    ],
    "Chicken Curry": [
        { ingredient: "Chicken", quantity: "1 cup pieces" },
        { ingredient: "Onion", quantity: "0.5 cup chopped" },
        { ingredient: "Tomato", quantity: "0.5 cup puree" },
        { ingredient: "Oil", quantity: "1.5 tablespoon" },
        { ingredient: "Yogurt", quantity: "2 tablespoons" }
    ]
};

function fetchRecipe(dishName) {
    if (!dishName || typeof dishName !== 'string') {
        console.error("Invalid dish name provided.");
        return null;
    }
    return recipes[dishName] || null;

}

export default fetchRecipe;



// import axios from 'axios';

// const API_KEY = 'cfa6611c3d6549f99b009016dccdad2a';

// async function fetchRecipe(dishName) {
//     try {
//         const res = await axios.get(`https://api.spoonacular.com/recipes/complexSearch`, {
//             params: {
//                 query: dishName,
//                 number: 1,
//                 apiKey: API_KEY
//             }
//         });

//         const results = res.data.results;
//         if (results.length === 0) return null;

//         const recipeId = results[0].id;

//         const details = await axios.get(`https://api.spoonacular.com/recipes/${recipeId}/information`, {
//             params: { apiKey: API_KEY }
//         });

//         return details.data.extendedIngredients.map(i => ({
//             ingredient: i.name,
//             quantity: `${i.amount} ${i.unit}`
//         }));

//     } catch (err) {
//         console.error("Error fetching recipe:", err.message);
//         return null;
//     }
// }

// export default fetchRecipe;
