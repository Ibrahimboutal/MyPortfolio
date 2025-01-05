import { useState, useMemo } from 'react';

export const useSearch = <T extends Record<string, any>>(
  items: T[],
  searchFields: (keyof T)[]
) => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredItems = useMemo(() => {
    if (!searchQuery) return items;
    
    const lowercaseQuery = searchQuery.toLowerCase();
    return items.filter((item) =>
      searchFields.some((field) => 
        String(item[field]).toLowerCase().includes(lowercaseQuery)
      )
    );
  }, [items, searchQuery, searchFields]);

  return { searchQuery, setSearchQuery, filteredItems };
};