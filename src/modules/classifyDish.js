function classifyDish(dishName) {
    const lower = dishName.toLowerCase();
    if (lower.includes('masala') || lower.includes('curry')) return 'Wet Sabzi';
    if (lower.includes('dal')) return 'Dal';
    return "Unknown";
}

export default classifyDish;
