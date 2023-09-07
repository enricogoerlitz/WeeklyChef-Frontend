import { IRecipeModel } from "../models/recipe";

const recipeNames = [
    "Creamy Mushroom Risotto",
    "Spaghetti Carbonara",
    "Lemon Herb Grilled Chicken",
    "Chocolate Lava Cake and a very long recipename",
    "Vegetable Stir-Fry",
    "Classic Caesar Salad",
    "Homestyle Pancakes",
    "Garlic Mashed Potatoes",
    "Blueberry Muffins",
    "Thai Red Curry",
    "Roasted Vegetable Medley and a very long recipename",
    "Crispy Baked Tofu Nuggets",
    "Apple Cinnamon Oatmeal",
    "Baked Salmon with Dill",
    "Mediterranean Quinoa Salad",
    "Cheese-Stuffed Burgers",
    "Homemade Margherita Pizza and a very long recipename",
    "Creamy Spinach Dip",
    "Cherry Almond Crumble",
    "Teriyaki Glazed Salmon",
    "Avocado Toast with Eggs",
    "Cauliflower Buffalo Wings",
    "Raspberry White Chocolate Scones",
    "Caprese Salad Skewers",
    "Zucchini Noodles with Pesto",
    "Black Bean Quesadillas and a very long recipename",
    "Peanut Butter Banana Smoothie",
    "Honey Mustard Glazed Ham",
    "Mixed Berry Parfait",
    "Butternut Squash Soup"
];

const getRandomNumber = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;

function getRandomArrayElement(array: string[]): string {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}

const generateRandomRecipe = (id: number): IRecipeModel => {
    const subDescriptionOptions = [
        "A delicious dish with a twist.",
        "A classic recipe loved by many.",
        "A quick and easy meal for busy days. Any long description is here given i can tell you!",
        "A flavorful combination of ingredients.",
        "A must-try recipe for any occasion.",
        "A wholesome and nutritious meal.",
        "A fusion of different culinary traditions. Any long description is here given i can tell you!",
        "An exotic dish with bold flavors.",
        "A comforting option for a cozy dinner."
    ];

    const difficultyLevels = ["einfach", "normal", "fortgesch.", "profi"];
    const mainCategories = ["Hauptspeise", "Dessert", "Frühstück", "Beilage", "Gebäck / Teig"];
    
    const isVegan = Math.random() < 0.5;
    const isVeggy = Math.random() < 0.5 && !isVegan;
    const isMeat = !isVegan && !isVeggy;

    return {
        id,
        name: recipeNames[id-1],
        subDescription: getRandomArrayElement(subDescriptionOptions),
        description: `This is the description of Recipe ${id}.`,
        rating: getRandomNumber(0, 5),
        preparationTime: getRandomNumber(1, 60) * 5,
        difficultyLevel: getRandomArrayElement(difficultyLevels),
        isVegan,
        isVeggy,
        isMeat,
        mainCategory: getRandomArrayElement(mainCategories) as any,
        tags: ["Suppe", "Sommer", "Vegan", "Rustikal", "Brot", "Käse"]
    };
};

const recipeExampleData: IRecipeModel[] = [];

for (let i = 1; i <= 30; i++) {
    recipeExampleData.push(generateRandomRecipe(i));
}

export default recipeExampleData;
