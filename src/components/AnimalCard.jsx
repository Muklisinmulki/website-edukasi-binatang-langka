export default function AnimalCard({ name, image, sound, location, description }) {
  return (
    <div
      className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition cursor-pointer m-2 relative"
      onClick={() => new Audio(sound).play()}
    >
      {/* Speaker Icon */}
      <div className="absolute top-3 right-3 z-10 bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-70 transition-all">
        <svg 
          className="w-4 h-4 text-white" 
          fill="currentColor" 
          viewBox="0 0 20 20"
        >
          <path 
            fillRule="evenodd" 
            d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.617.82L4.236 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.236l4.147-3.82a1 1 0 011.617.82zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.983 5.983 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.984 3.984 0 00-1.172-2.828 1 1 0 010-1.415z" 
            clipRule="evenodd" 
          />
        </svg>
      </div>

      <div className="aspect-square overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-4 border-t border-gray-100">
        <div className="flex items-center justify-between">
          <h3 className="font-bold text-gray-900">{name}</h3>
        </div>
        <p className="text-sm text-gray-500 mt-1">{location}</p>
        <div className="mt-3 flex justify-between items-center">
          <span className="text-sm font-medium text-gray-900">
            {description}
          </span>
        </div>
      </div>
    </div>
  );
}