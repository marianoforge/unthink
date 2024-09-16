import React, { useContext } from "react";
import { useRecipes } from "../hooks/useRecipes";
import { IngredientsContext } from "../context/IngredientsContext";
const RecipeList = () => {
    const ingredientsContext = useContext(IngredientsContext);
    const { data: recipes, isLoading, error, } = useRecipes((ingredientsContext === null || ingredientsContext === void 0 ? void 0 : ingredientsContext.ingredients) || []);
    if (!ingredientsContext)
        return null;
    if (isLoading)
        return <p>Loading recipes...</p>;
    if (error)
        return <p>Error loading recipes.</p>;
    return (<div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
      {recipes === null || recipes === void 0 ? void 0 : recipes.map((recipe) => (<div key={recipe.id} className="border p-4">
          <h2 className="text-xl font-bold">{recipe.title}</h2>
          <p>{recipe.description}</p>
          <ul>
            {recipe.ingredients.map((ingredient) => (<li key={ingredient}>{ingredient}</li>))}
          </ul>
          <img src={recipe.image} alt={recipe.title} className="w-full h-48 object-cover mt-2"/>
        </div>))}
    </div>);
};
export default RecipeList;
