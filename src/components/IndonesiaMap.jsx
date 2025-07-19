// components/IndonesiaMap.jsx
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { useMediaQuery } from 'react-responsive';

// Fix for default marker icons in Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

export default function IndonesiaMap({ animals }) {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  
  // Center of Indonesia with mobile adjustment
  const center = isMobile ? [-2.5489, 115.0149] : [-2.5489, 118.0149];
  const zoom = isMobile ? 4.5 : 5;

  // Base locations for each region
  const baseLocations = {
    "Kalimantan, Sumatra": [-0.5, 113.5],
    "Sumatra": [-0.5897, 101.3431],
    "Papua": [-4.2699, 138.0804],
    "Jawa, Bali": [-7.6145, 110.7126],
    "Kalimantan": [-0.5, 113.5],
    "Nusa Tenggara": [-8.6529, 117.3616],
    "Sulawesi": [-2.5489, 121.0149],
    "Berbagai daerah": [-2.5489, 118.0149]
  };

  // Group animals by location
  const groupedAnimals = animals.reduce((acc, animal) => {
    const locationKey = animal.location.includes(',') 
      ? animal.location.split(',').map(part => part.trim()).join(', ')
      : animal.location;
    
    if (!acc[locationKey]) {
      acc[locationKey] = [];
    }
    acc[locationKey].push(animal);
    return acc;
  }, {});

  // Create custom icon with responsive size
  const createCustomIcon = (imageUrl) => {
    const size = isMobile ? 40 : 50;
    const imgSize = isMobile ? 32 : 40;
    
    return L.divIcon({
      html: `
        <div style="
          width: ${size}px;
          height: ${size}px;
          border-radius: 50%;
          background: white;
          border: 3px solid #4CAF50;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        ">
          <img 
            src="${imageUrl}" 
            alt="Animal" 
            style="
              width: ${imgSize}px;
              height: ${imgSize}px;
              border-radius: 50%;
              object-fit: cover;
            "
          />
        </div>
      `,
      className: '',
      iconSize: [size, size],
      iconAnchor: [size/2, size/2],
      popupAnchor: [0, -size/2]
    });
  };

  // Function to calculate spread positions with mobile adjustment
  const getSpreadPositions = (basePosition, count) => {
    const radius = isMobile ? 0.2 : 0.3; // smaller radius on mobile
    const angleStep = (Math.PI * 2) / count;
    return Array.from({ length: count }, (_, i) => {
      const angle = i * angleStep;
      return [
        basePosition[0] + radius * Math.sin(angle),
        basePosition[1] + radius * Math.cos(angle)
      ];
    });
  };

  return (
    <div className={`w-screen relative left-1/2 right-1/2 -mx-[50vw] my-8 ${isMobile ? 'px-2' : 'px-4'}`}>
      <div className={`${isMobile ? 'h-[80vh]' : 'h-[90vh]'} w-full rounded-lg overflow-hidden shadow-md`}>
        <MapContainer 
          center={center} 
          zoom={zoom} 
          style={{ height: '100%', width: '100%' }}
          dragging={!isMobile} // Disable dragging on mobile if needed
          tap={!isMobile} // Disable tap on mobile if needed
          zoomControl={!isMobile} // Hide zoom control on mobile
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          
          {Object.entries(groupedAnimals).map(([location, animalsInLocation]) => {
            const basePosition = baseLocations[location];
            if (!basePosition) {
              console.warn(`Location not found for: ${location}`);
              return null;
            }

            const positions = getSpreadPositions(basePosition, animalsInLocation.length);

            return animalsInLocation.map((animal, index) => (
              <Marker 
                key={`${location}-${index}`} 
                position={positions[index]}
                icon={createCustomIcon(animal.image)}
              >
                <Popup className={isMobile ? 'w-40' : 'w-48'}>
                  <div className="text-center max-w-xs">
                    <h3 className="font-bold text-lg mb-2">{animal.name}</h3>
                    <img 
                      src={animal.image} 
                      alt={animal.name} 
                      className={`${isMobile ? 'w-24 h-24' : 'w-32 h-32'} object-cover mx-auto my-2 rounded-lg`}
                    />
                    <p className="text-sm font-semibold text-gray-600 mb-1">
                      Lokasi: {animal.location}
                    </p>
                    <p className={`text-sm text-gray-700 ${isMobile ? 'line-clamp-2' : ''}`}>
                      {animal.description}
                    </p>
                    {animal.sound && (
                      <audio controls className="mt-2 w-full">
                        <source src={animal.sound} type="audio/mpeg" />
                        Browser Anda tidak mendukung elemen audio.
                      </audio>
                    )}
                  </div>
                </Popup>
              </Marker>
            ));
          })}
        </MapContainer>
      </div>
    </div>
  );
}