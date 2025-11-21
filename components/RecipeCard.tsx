import Image from 'next/image';
import type { Recipe } from '../hooks/useRecipes';

type Props = { recipe: Recipe };

export default function RecipeCard({ recipe }: Props) {
  const instructions = recipe.strInstructions?.slice(0, 160) + '...';

  return (
    <article className="flex flex-col rounded-lg bg-white shadow-sm overflow-hidden">
      <div className="relative h-48 w-full">
        <Image
          src={recipe.strMealThumb}
          alt={recipe.strMeal}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4 flex flex-col gap-2">
        <h2 className="font-semibold text-lg line-clamp-2">{recipe.strMeal}</h2>
        <p className="text-sm text-slate-700 line-clamp-4">{instructions}</p>
      </div>
    </article>
  );
}
