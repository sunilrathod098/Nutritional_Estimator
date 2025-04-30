const unitToGrams = {
    "cup": 200,
    "tablespoon": 15,
    "teaspoon": 5,
};

function convertToGrams(quantityStr) {
    const match = quantityStr.match(/([\d.]+)\s*(\w+)/);
    if (!match) {
        console.warn(`Invalid quantity format: ${quantityStr}`);
        return null;
    }

    const [ , num, unit] = match;
    const base = unitToGrams[unit.toLowerCase()];
    if (!base) {
        console.warn(`Unit not recognized: ${unit}`);
        return null;
    }
    return base ? parseFloat(num) * base : null;
}

export default convertToGrams;
