import { useContext } from "react";
import { RecipesContext } from "./App";
import { RecipeItem } from "./ReceipeItem";
import "./Home.css";

export const Home = () => {
  const { recipes } = useContext(RecipesContext);

  return (
    <div className="recipes-wrapper">
      {recipes.map((recipe) => (
        <RecipeItem recipe={recipe} />
      ))}
    </div>
  );
};
