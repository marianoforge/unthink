import React, { useState, useContext } from "react";
import { IngredientsContext } from "../context/IngredientsContext";

const IngredientInput: React.FC = () => {
  const [inputValue, setInputValue] = useState("");
  const ingredientsContext = useContext(IngredientsContext);

  if (!ingredientsContext) return null;

  const { addIngredient } = ingredientsContext;

  const handleAdd = () => {
    if (inputValue.trim()) {
      addIngredient(inputValue.trim().toLowerCase());
      setInputValue("");
    }
  };

  return (
    <div className="flex items-center">
      <input
        className="border p-2 flex-grow"
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter an ingredient"
      />
      <button className="ml-2 p-2 bg-blue-500 text-white" onClick={handleAdd}>
        Add
      </button>
    </div>
  );
};

export default IngredientInput;
