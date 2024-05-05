import axios from "axios";

export class RecipeApi {
  static getRecipe = async (searchTerm: string) =>
    await axios.get<string[]>("http://localhost:8080/recipe", {
      params: { searchTerm: searchTerm, },
    });
}
