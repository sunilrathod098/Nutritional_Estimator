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