import { useContext, useEffect } from "react";
import { RecipesContext } from "./App";
import { useLocation } from "react-router-dom";

export const RecipeDetails = () => {
  const { recipes } = useContext(RecipesContext);
  const location = useLocation();
  const id = location.pathname.split("/")[2];

  const recipe = recipes.find((x) => x.id.toString() === id);

  useEffect(() => {
    document.title = recipe?.name || "Coolineo";
  }, []);

  return (
    <div>
      <h1>{recipe?.name}</h1>
      <img src={recipe?.thumbnail} alt={recipe?.name}></img>
      <h2>Ingredients</h2>
      <ul>
        {recipe?.ingredients.map((ingredient) => (
          <li>
            <span style={{ fontWeight: 600 }}>{ingredient.name}</span>{" "}
            <b>
              {ingredient.amount} {ingredient.unit}
            </b>
          </li>
        ))}
      </ul>
      <h2>Preparation</h2>
      <ol>
        {recipe?.steps.map((step) => (
          <>
            <li>{step.content}</li>
            <br />
          </>
        ))}
      </ol>
    </div>
  );
};
