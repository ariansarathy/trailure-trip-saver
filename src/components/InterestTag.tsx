
const InterestTag = ({
  interest,
  selected,
  onClick,
}: {
  interest: string;
  selected: boolean;
  onClick: () => void;
}) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
        selected
          ? "bg-sage-400 text-white hover:bg-sage-500"
          : "bg-white bg-opacity-50 hover:bg-opacity-70 text-gray-700"
      } hover-lift`}
    >
      {interest}
    </button>
  );
};

export default InterestTag;
