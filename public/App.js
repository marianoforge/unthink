import React from "react";
import IngredientInput from "./components/IngredientInput";
import IngredientList from "./components/IngredientList";
import RecipeList from "./components/RecipeList";
const App = () => {
    return (<div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">What's in Your Fridge?</h1>
      <IngredientInput />
      <IngredientList />
      <RecipeList />
    </div>);
};
export default App;
