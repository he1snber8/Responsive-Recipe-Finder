"use client";
import { useEffect, useState } from 'react';

export type Recipe = {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
  strInstructions: string;
};

export function useRecipes(query: string) {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!query) return;
    setLoading(true);
    setError(null);
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${encodeURIComponent(query)}`)
      .then(r => r.json())
      .then(data => setRecipes(data.meals || []))
      .catch(() => setError('Failed to load recipes'))
      .finally(() => setLoading(false));
  }, [query]);

  return { recipes, loading, error };
}
