import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Home";
import { createContext } from "react";
import logo from "./logo192.png";
import { RecipeDetails } from "./RecipeDetails";

interface Ingredient {
  name: string;
  amount: number;
  unit: string;
}

interface Step {
  content: string;
}

export interface Recipe {
  id: number;
  name: string;
  thumbnail: string;
  ingredients: Ingredient[];
  steps: Step[];
}

interface RecipeContext {
  recipes: Recipe[];
}

export const RecipesContext = createContext<RecipeContext>({
  recipes: [],
});

function App() {
  const recipes = [
    {
      id: 1,
      name: "Ryba po grecku",
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
    },
    {
      id: 2,
      name: "Pierogi ruskie",
      thumbnail: logo,
      ingredients: [
        { name: "Pierogi", amount: 1, unit: "paczka" },
        { name: "Boczek", amount: 400, unit: "gramów" },
        { name: "cebula", amount: 1, unit: "" },
      ],
      steps: [
        { content: "Poszatkuj cebulę" },
        { content: "Poszatkuj boczek" },
        { content: "Wszystko razem podsmaż przez 10 minut" },
      ],
    },
    {
      id: 3,
      name: "Pierogi ruskie",
      thumbnail: logo,
      ingredients: [
        { name: "Pierogi", amount: 1, unit: "paczka" },
        { name: "Boczek", amount: 400, unit: "gramów" },
        { name: "cebula", amount: 1, unit: "" },
      ],
      steps: [
        { content: "Poszatkuj cebulę" },
        { content: "Poszatkuj boczek" },
        { content: "Wszystko razem podsmaż przez 10 minut" },
      ],
    },
    {
      id: 4,
      name: "Parówki gotowane",
      thumbnail: logo,
      ingredients: [{ name: "Parówki", amount: 1, unit: "paczka" }],
      steps: [{ content: "Ugotuj parówki" }],
    },
    {
      id: 5,
      name: "Karpatka",
      thumbnail: logo,
      ingredients: [{ name: "Drożdże", amount: 1, unit: "paczka" }],
      steps: [{ content: "Rozgnieć drożdże" }],
    },
  ];

  return (
    <RecipesContext.Provider value={{ recipes: recipes }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route
            path="/recipe-details/:recipeId"
            element={<RecipeDetails />}
          ></Route>
          <Route path="*" element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
    </RecipesContext.Provider>
  );
}

export default App;
