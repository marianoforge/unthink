import React, { useContext } from "react";
import { IngredientsContext } from "../context/IngredientsContext";

const IngredientList: React.FC = () => {
  const ingredientsContext = useContext(IngredientsContext);

  if (!ingredientsContext) return null;

  const { ingredients, removeIngredient } = ingredientsContext;

  return (
    <ul className="mt-4">
      {ingredients.map((ingredient, index) => (
        <li key={index} className="flex justify-between items-center">
          {ingredient}
          <button
            className="text-red-500"
            onClick={() => removeIngredient(ingredient)}
          >
            Remove
          </button>
        </li>
      ))}
    </ul>
  );
};

export default IngredientList;
