"use client";
import { useRecipes } from '../hooks/useRecipes';
import RecipeCard from './RecipeCard';

type Props = { searchTerm: string };

export default function RecipeGrid({ searchTerm }: Props) {
  const { recipes, loading, error } = useRecipes(searchTerm);

  if (loading) return <p>Loading recipes...</p>;
  if (error) return <p className="text-red-600">{error}</p>;

  return (
    <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {recipes.map(r => (
        <RecipeCard key={r.idMeal} recipe={r} />
      ))}
    </section>
  );
}
