
import { useState } from "react";
import { Search } from "lucide-react";

const SearchBar = ({ onSearch }: { onSearch: (query: string) => void }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-2xl mx-auto relative animate-fade-up">
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Where would you like to go?"
          className="w-full h-14 px-6 pr-12 rounded-full bg-white bg-opacity-80 backdrop-blur-sm border border-gray-200 focus:outline-none focus:ring-2 focus:ring-sage-400 focus:border-transparent transition-all duration-300 text-lg placeholder:text-gray-400"
        />
        <button
          type="submit"
          className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-sage-400 text-white hover:bg-sage-500 transition-colors duration-300"
        >
          <Search className="w-5 h-5" />
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
