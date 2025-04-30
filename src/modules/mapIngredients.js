import nutritionDB from "../data/nutritionDB.json" assert { type: 'json' };

function mapIngredient(name) {
    const lowerName = name.toLowerCase();
    return Object.keys(nutritionDB)
    .find(dbItem => lowerName.includes(dbItem));
}

export default mapIngredient;