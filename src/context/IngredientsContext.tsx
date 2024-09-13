import React, { createContext, useState } from "react";

interface IngredientsContextType {
  ingredients: string[];
  addIngredient: (ingredient: string) => void;
  removeIngredient: (ingredient: string) => void;
}

export const IngredientsContext = createContext<IngredientsContextType | null>(
  null
);

export const IngredientsProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [ingredients, setIngredients] = useState<string[]>([]);

  const addIngredient = (ingredient: string) => {
    setIngredients((prev) => [...prev, ingredient]);
  };

  const removeIngredient = (ingredient: string) => {
    setIngredients((prev) => prev.filter((item) => item !== ingredient));
  };

  return (
    <IngredientsContext.Provider
      value={{ ingredients, addIngredient, removeIngredient }}
    >
      {children}
    </IngredientsContext.Provider>
  );
};
