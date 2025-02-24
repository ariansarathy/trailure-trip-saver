
import { Heart } from "lucide-react";
import { useState } from "react";

interface DestinationCardProps {
  image: string;
  title: string;
  description: string;
  rating: number;
}

const DestinationCard = ({
  image,
  title,
  description,
  rating,
}: DestinationCardProps) => {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <div className="relative group animate-fade-up">
      <div className="overflow-hidden rounded-xl glass-card hover-lift">
        <div className="relative h-48 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <button
            onClick={() => setIsFavorite(!isFavorite)}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white bg-opacity-80 backdrop-blur-sm flex items-center justify-center transition-all duration-300 hover:bg-opacity-100"
          >
            <Heart
              className={`w-5 h-5 transition-colors duration-300 ${
                isFavorite ? "fill-red-500 text-red-500" : "text-gray-600"
              }`}
            />
          </button>
        </div>
        <div className="p-4">
          <h3 className="text-xl font-semibold mb-2 text-balance">{title}</h3>
          <p className="text-gray-600 text-sm mb-3 line-clamp-2">{description}</p>
          <div className="flex items-center">
            <div className="flex items-center">
              {Array.from({ length: 5 }).map((_, i) => (
                <svg
                  key={i}
                  className={`w-4 h-4 ${
                    i < rating ? "text-yellow-400" : "text-gray-300"
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="ml-2 text-sm text-gray-600">{rating.toFixed(1)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationCard;
