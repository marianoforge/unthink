import React, { useState, useContext, useEffect } from "react";
import { IngredientsContext } from "../context/IngredientsContext";
import { mockRecipes } from "../mockData/recipes";
const IngredientInput = () => {
    const [inputValue, setInputValue] = useState("");
    const [matchingRecipes, setMatchingRecipes] = useState([]);
    const ingredientsContext = useContext(IngredientsContext);
    useEffect(() => {
        if (!ingredientsContext)
            return;
        const { ingredients } = ingredientsContext;
        const searchRecipes = () => {
            const filteredRecipes = mockRecipes.filter((recipe) => ingredients.some((ingredient) => recipe.ingredients.some((recipeIngredient) => recipeIngredient.toLowerCase().includes(ingredient.toLowerCase()))));
            setMatchingRecipes(filteredRecipes);
        };
        searchRecipes();
    }, [ingredientsContext]);
    if (!ingredientsContext)
        return null;
    const { addIngredient } = ingredientsContext;
    const handleAdd = () => {
        if (inputValue.trim()) {
            addIngredient(inputValue.trim().toLowerCase());
            setInputValue("");
        }
    };
    return (<div>
      <div className="flex items-center">
        <input className="border p-2 flex-grow" type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder="Enter an ingredient"/>
        <button className="ml-2 p-2 bg-blue-500 text-white" onClick={handleAdd}>
          Add
        </button>
      </div>
      <div className="mt-4">
        <h2 className="text-xl font-bold">Matching Recipes:</h2>
        <ul>
          {matchingRecipes.map((recipe) => (<li key={recipe.id}>{recipe.title}</li>))}
        </ul>
      </div>
    </div>);
};
export default IngredientInput;
