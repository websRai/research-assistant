import React, { useState } from 'react';
import { Search } from 'lucide-react';

const SearchComponent: React.FC = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<string[]>([]);

  const handleSearch = () => {
    // TODO: Implement actual search logic
    setResults([
      'Result 1: Lorem ipsum dolor sit amet',
      'Result 2: Consectetur adipiscing elit',
      'Result 3: Sed do eiusmod tempor incididunt',
    ]);
  };

  return (
    <div>
      <div className="flex mb-4">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="flex-grow border rounded-l-lg p-2"
          placeholder="Enter your search query..."
        />
        <button
          onClick={handleSearch}
          className="bg-blue-500 text-white p-2 rounded-r-lg"
        >
          <Search />
        </button>
      </div>
      <div>
        {results.map((result, index) => (
          <div key={index} className="bg-gray-100 p-4 mb-2 rounded">
            {result}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchComponent;