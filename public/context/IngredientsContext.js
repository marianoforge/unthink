import React, { createContext, useState } from "react";
export const IngredientsContext = createContext(null);
export const IngredientsProvider = ({ children, }) => {
    const [ingredients, setIngredients] = useState([]);
    const addIngredient = (ingredient) => {
        setIngredients((prev) => [...prev, ingredient]);
    };
    const removeIngredient = (ingredient) => {
        setIngredients((prev) => prev.filter((item) => item !== ingredient));
    };
    return (<IngredientsContext.Provider value={{ ingredients, addIngredient, removeIngredient }}>
      {children}
    </IngredientsContext.Provider>);
};
