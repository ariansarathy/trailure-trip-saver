
import { useState } from "react";
import SearchBar from "@/components/SearchBar";
import { DatePicker } from "@/components/DatePicker";
import InterestTag from "@/components/InterestTag";
import DestinationCard from "@/components/DestinationCard";

const interests = [
  "Nature",
  "Culture",
  "Food",
  "Adventure",
  "Relaxation",
  "History",
  "Shopping",
  "Nightlife",
];

const placeholderDestinations = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1501854140801-50d01698950b",
    title: "Mountain Retreat",
    description: "Peaceful mountain getaway with breathtaking views and hiking trails.",
    rating: 4.8,
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1472396961693-142e6e269027",
    title: "Wildlife Safari",
    description: "Experience nature up close with guided tours through pristine wilderness.",
    rating: 4.9,
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1473091534298-04dcbce3278c",
    title: "Cultural Heritage",
    description: "Immerse yourself in local traditions and historical landmarks.",
    rating: 4.7,
  },
];

const Index = () => {
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);

  const handleSearch = (query: string) => {
    console.log("Searching for:", query);
    // Implementation for search functionality will be added later
  };

  const toggleInterest = (interest: string) => {
    setSelectedInterests((prev) =>
      prev.includes(interest)
        ? prev.filter((i) => i !== interest)
        : [...prev, interest]
    );
  };

  return (
    <div className="min-h-screen bg-sand-100 px-4 py-12">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center space-y-4 animate-fade-up">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Discover Your Next Adventure
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find the perfect destination based on your interests and travel style.
          </p>
        </div>

        <div className="space-y-6">
          <SearchBar onSearch={handleSearch} />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            <DatePicker />
            <DatePicker />
          </div>

          <div className="flex flex-wrap gap-3 justify-center animate-fade-up" style={{ animationDelay: "0.2s" }}>
            {interests.map((interest) => (
              <InterestTag
                key={interest}
                interest={interest}
                selected={selectedInterests.includes(interest)}
                onClick={() => toggleInterest(interest)}
              />
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {placeholderDestinations.map((destination, index) => (
            <div key={destination.id} style={{ animationDelay: `${0.3 + index * 0.1}s` }}>
              <DestinationCard {...destination} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
