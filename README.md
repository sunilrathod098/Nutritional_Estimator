
# 🍲 VYB AI Nutrition Estimator

## 🧠 Overview

The **VYB AI Nutrition Estimator** is a Node.js application that estimates the nutritional values of Indian home-cooked dishes. It does this by:

- Fetching a generic recipe for the dish
- Mapping ingredients to a local nutrition database
- Converting ingredient quantities into grams
- Calculating total nutrition per serving
- Classifying the dish into types (e.g., Dal, Roti, Wet Sabzi)

This tool supports both **Command Line Interface (CLI)** and **REST API** modes.

---

## 📁 Project Structure

```plaintext
Nutritional_Estimator/vyb-assignment/
├── api
|    └──server.js                #Express server for API mode
├── data/
│   ├── nutritionDB.json        # Local nutrition database
│   └── measurement.json        # Conversion of common units to grams
├── modules/
│   ├── calculateNutrition.js   # Sums nutrition values for all ingredients
│   ├── classifyDish.js         # Categorizes dish into types
│   ├── convertToGrams.js       # Converts units to grams
│   ├── fetchRecipe.js          # Simulates fetching recipe ingredients
│   ├── main.js                 # CLI application entry point
│   └── mapIngredient.js        # Maps ingredients to standard database names                
├── package.json
└── README.md
```

---

## ⚙️ Installation & Setup

```bash
git clone https://github.com/sunilrathod098/Nutritional_Estimator.git
cd Nutritional_Estimator
npm install
npm install Express axios dotenv lodash openai readline-sync nodemon
```

---

## 🚀 Usage

### Option 1: Run as CLI App

```bash
npm run start
```

You will be prompted to input a dish name (e.g., `Rajma`, `Paneer Butter Masala`). The program will print the estimated nutrition and dish classification in the terminal.

---

### Option 2: Run as API Server

```bash
npm run api
```

Open your browser or API client (like Postman) and make a GET request:

```
http://localhost:4000/nutrition?dish=Rajma
```

---

## 📡 API Endpoint

### `GET /nutrition?dish=<dish_name>`

#### 🔸 Query Parameter:
- `dish` (required): Name of the Indian dish

#### 🔸 Example:
```
GET http://localhost:4000/nutrition?dish=Paneer%20Butter%20Masala
```

#### 🔸 Sample Response:
- Ok 200 Response from `Postman` and it showing output response
```json
{
  "estimated_nutrition_per_200ml_katori": {
    "calories": 280,
    "protein": 12,
    "carbs": 10,
    "fat": 18
  },
  "dish_type": "Wet Sabzi",
  "ingredients_used": [
    { "ingredient": "Paneer", "quantity": "0.75 cup cubes" },
    { "ingredient": "Butter", "quantity": "2 teaspoons" },
    { "ingredient": "Tomato", "quantity": "0.5 cup puree" },
    { "ingredient": "Onion", "quantity": "0.5 cup chopped" },
    { "ingredient": "Cream", "quantity": "1 tablespoon" }
  ]
}
```

---

## 📂 Explanation of Main Files

### 🔹 `main.js` (CLI Entry Point)

This is the command-line interface that allows users to interactively input dish names and receive nutrition estimates in the terminal.

#### How it works:

1. Prompts the user to enter a dish name using `readline`.
2. Passes that dish name to `fetchRecipe` → gets ingredients.
3. Uses `mapIngredient` to match ingredient names with those in the database.
4. Converts each quantity to grams using `convertToGrams`.
5. Calculates nutrition using `calculateNutrition`.
6. Classifies the dish using `classifyDish`.
7. Scales down total nutrition to a single serving size.
8. Prints the results (ingredients used, classification, per-serving nutrition).

> ⚠️ If any ingredient can't be mapped or converted, it's skipped with a warning.

---

### 🔹 `server.js` (Express API Server)

This is the REST API interface that runs an HTTP server on port `4000`.

#### How it works:

1. Sets up an Express server with CORS and JSON support.
2. Accepts GET requests on `/nutrition?dish=...`
3. Processes dish name the same way as `main.js`:
   - Fetches recipe
   - Maps and converts ingredients
   - Calculates nutrition
   - Classifies the dish
4. Sends JSON response with:
   - Total estimated nutrition per standard serving (200ml katori)
   - Dish classification
   - Ingredients used

---

## 🧠 Assumptions

- Recipe data is simulated and standardized for 3–4 servings.
- Nutrition estimates are scaled to a 200ml serving (as per Indian household standard).
- Missing or unknown ingredients are skipped.
- Units like "cup", "teaspoon", etc., are converted to grams using `measurement.json`.

---

## 🧪 Postman Setup

You can use Postman to test the API:

1. Start the server: `npm run api`
2. Open Postman and send a GET request to:
   ```
   http://localhost:4000/nutrition?dish=Rajma
   ```

You’ll get back a full nutrition analysis of the dish.

---

## 🔧 Modular Design

Each functionality is separated into its own module:

| Module               | Responsibility                                 |
|----------------------|-----------------------------------------------|
| `fetchRecipe.js`     | Simulates getting ingredient list for dish    |
| `mapIngredient.js`   | Maps synonyms/spellings to standard names     |
| `convertToGrams.js`  | Converts household units into grams           |
| `calculateNutrition.js` | Computes total nutrition per ingredient   |
| `classifyDish.js`    | Categorizes dish into Indian food types       |

---

## ⚠️ Error Handling

- Dish not found → returns a 400 error
- Ingredients not found → shown as warnings
- Invalid quantity → skipped with logs
- No valid ingredients → process aborts with error

---

## 📚 Future Improvements

- Replace dummy `fetchRecipe` logic with Spoonacular API
- Improve ingredient synonym mapping using NLP
- Add support for recipes with steps and cooking effects
- Include micro-nutrients and dietary flags (e.g., vegan, gluten-free)

---

## 👨‍💻 Author

**Sunil Rathod**
[GitHub Profile](https://github.com/sunilrathod098)

- 🔗 [GitHub Repository]: [https://github.com/sunilrathod098/Nutritional_Estimator.git]
- 📁 [Google Drive Link]: [https://drive.google.com/drive/folders/1kM62jXjWZSV3FdOVxru5Q5LvkNG2RtbV?usp=sharing]


## 🧾 Conclusion
- This project provides a modular and scalable solution for estimating the nutritional value of Indian dishes like Paneer Butter Masala. By integrating the Spoonacular API for ingredient parsing, mapping household measurements to grams, and using a local nutrition database, the app delivers accurate nutrition insights even for complex traditional recipes.

### Key highlights:
- Modular architecture for maintainability and reuse.
- Smart ingredient mapping to standardize nutrition calculations.
- Can be extended to support more cuisines, UI interfaces, or dietary filters.