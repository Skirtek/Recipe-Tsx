import { Recipe } from "./App";
import "./RecipeItem.css";
import { useNavigate } from "react-router-dom";

interface RecipeItemProps {
  recipe: Recipe;
}

export const RecipeItem = (props: RecipeItemProps) => {
  const navigate = useNavigate();

  return (
    <div className="recipe-item-wrapper">
      <img src={props.recipe.thumbnail} />
      <button
        onClick={() => {
          navigate(`/recipe-details/${props.recipe.id}`);
        }}
      >
        {props.recipe.name}
      </button>
    </div>
  );
};
