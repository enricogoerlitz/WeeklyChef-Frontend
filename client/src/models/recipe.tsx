export interface IRecipeModel {
    id: number,
    name: string,
    subDescription: string,
    description: string,
    rating: number,
    preparationTime: number,
    difficultyLevel: string,
    isVegan: boolean,
    isVeggy: boolean,
    isMeat: boolean,
    mainCategory: "Hauptspeise" | "Frühstück" | "Dessert" | "Beilage" | "Gebäck / Teig",
    tags: string[]
}
