"use client";
import { useState } from 'react';
import RecipeGrid from '../components/RecipeGrid';

export default function HomePage() {
  const [query, setQuery] = useState('');
  const [searchTerm, setSearchTerm] = useState('chicken');

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (query.trim()) setSearchTerm(query.trim());
  }

  return (
    <main className="mx-auto max-w-5xl px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Responsive Recipe Finder</h1>
      <form onSubmit={handleSubmit} className="flex gap-2 mb-6 flex-col sm:flex-row">
        <input
          className="flex-1 rounded border px-3 py-2"
          placeholder="Search recipes (e.g. pasta)"
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
        <button className="rounded bg-emerald-600 px-4 py-2 text-white">Search</button>
      </form>
      <RecipeGrid searchTerm={searchTerm} />
    </main>
  );
}
