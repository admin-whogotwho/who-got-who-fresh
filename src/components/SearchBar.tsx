"use client";

import React from "react";

interface SearchBarProps {
  query: string;
  setQuery: (q: string) => void;
}

export function SearchBar({ query, setQuery }: SearchBarProps) {
  return (
    <input
      type="search"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      placeholder="Search digital products, storefronts, domains..."
      className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent transition"
      aria-label="Search digital products"
    />
  );
}
