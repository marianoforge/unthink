import { useQuery } from "@tanstack/react-query";
import mockRecipes from "../mockData/recipes.json";

export interface Recipe {
  id: number;
  title: string;
  image: string;
  ingredients: string[];
}

const fetchRecipes = async (ingredients: string[]): Promise<Recipe[]> => {
  // Simulate API call with mock data
  await new Promise((resolve) => setTimeout(resolve, 500)); // Simulate delay
  if (ingredients.length === 0) return [];

  return mockRecipes.filter((recipe: Recipe) =>
    ingredients.every((ingredient) => recipe.ingredients.includes(ingredient))
  );
};

// REAL API CALL
// const fetchRecipes = async (ingredients: string[]): Promise<Recipe[]> => {
//     const response = await fetch(
//       `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredients.join(
//         ','
//       )}&number=10&apiKey=${process.env.REACT_APP_SPOONACULAR_API_KEY}`
//     );
//     if (!response.ok) {
//       throw new Error('Network response was not ok');
//     }
//     const data = await response.json();
//     return data;
//   };

export const useRecipes = (ingredients: string[]) => {
  return useQuery({
    queryKey: ["recipes", ingredients],
    queryFn: () => fetchRecipes(ingredients),
    enabled: ingredients.length > 0,
  });
};
