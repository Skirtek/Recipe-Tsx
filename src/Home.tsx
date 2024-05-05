import React, { useCallback, useContext, useEffect, useState } from "react";
import { Recipe, RecipesContext } from "./App";
import { RecipeItem } from "./ReceipeItem";
import "./Home.css";
import { RecipeApi } from "./RecipeApi";
import logo from "./logo192.png";

export const Home = () => {
  //const { recipes } = useContext(RecipesContext);

  const [searchValue, setSearchValue] = useState<string>("");
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  const onSearchInputChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.currentTarget.value);
  };

  const fetchRecipes = useCallback(async () => {
    const result = await RecipeApi.getRecipe(searchValue);

    setRecipes(
      result.data.map((name) => {
        return {
          id: 1,
          name: name,
          thumbnail: logo,
          ingredients: [
            { name: "Ryba - dorsz", amount: 1, unit: "opakowanie" },
            { name: "Pomidory", amount: 300, unit: "gramów" },
            { name: "cebula", amount: 1, unit: "" },
          ],
          steps: [
            { content: "Kup rybę" },
            { content: "Poszatkuj cebulę" },
            { content: "Oczyść rybę" },
          ],
        };
      })
    );
  }, [searchValue]);

  useEffect(() => {
    fetchRecipes();
  }, [searchValue]);

  return (
    <>
      <div>
        <label style={{ margin: "16px" }}>Wyszukiwarka</label>
        <input type="text" onChange={onSearchInputChanged}></input>
      </div>
      <div className="recipes-wrapper">
        {recipes.map((recipe) => (
          <RecipeItem recipe={recipe} />
        ))}
      </div>
    </>
  );
};
