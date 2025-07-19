import { useState } from "react";
import AnimalCard from "../components/AnimalCard";
import IndonesiaMap from "../components/IndonesiaMap";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");

  const animals = [
    {
      name: "Orang Utan",
      image: "/orang_utan.png",
      sound: "/Audio/orangutan.mp3",
      location: "Kalimantan, Sumatra",
      description:
        "Primata cerdas berbulu kemerahan yang hidup di hutan hujan Kalimantan dan Sumatra.",
    },
    {
      name: "Harimau Sumatera",
      image: "/harimau.png",
      sound: "/Audio/Harimau.mp3",
      location: "Sumatra",
      description:
        "Kucing besar berwarna oranye dengan garis-garis hitam yang merupakan predator puncak di hutan Asia.",
    },
    {
      name: "Gajah Sumatera",
      image: "/gajah.png",
      sound: "/Audio/gajah.mp3",
      location: "Kalimantan,Sumatra",
      description:
        "Mamalia darat terbesar dengan belalai panjang dan gading, hidup di Afrika dan Asia.",
    },
    {
      name: "Cendrawasih",
      image: "/Cendrawasi.png",
      sound: "/Audio/Cendrawasi.mp3",
      location: "Papua",
      description:
        "Burung eksotis dari Papua dengan bulu warna-warni yang dikenal sebagai 'bird of paradise'.",
    },
    {
      name: "Lutung Jawa",
      image: "/lutung.png",
      sound: "/Audio/lutung.mp3",
      location: "Jawa, Bali",
      description:
        "Monyet berbulu hitam dengan jambul khas, sering ditemukan di hutan Asia Tenggara.",
    },
    {
      name: "Bekantan",
      image: "/bekantan.png",
      sound: "/Audio/bekantan.mp3",
      location: "Kalimantan",
      description:
        "Monyet hidung panjang endemik Kalimantan dengan bulu cokelat kemerahan.",
    },
    {
      name: "Badak Sumatera",
      image: "/badak.png",
      sound: "/Audio/badak.mp3",
      location: "Kalimantan",
      description:
        "Mamalia besar dengan cula di hidungnya yang terancam punah.",
    },
    {
      name: "Elang Jawa",
      image: "/elang.png",
      sound: "/Audio/elang.mp3",
      location: "Jawa, Bali",
      description:
        "Burung pemangsa dengan penglihatan tajam dan kemampuan terbang yang kuat.",
    },
    {
      name: "Ajag (Anjing liar Jawa)",
      image: "/ajeg.png",
      sound: "/Audio/ajeg.mp3",
      location: "Kalimantan",
      description: "Hewan endemik Kalimantan dengan karakteristik unik.",
    },
    {
      name: "Kera Hitam Flores",
      image: "/kera.png",
      sound: "/Audio/kera.mp3",
      location: "Nusa Tenggara",
      description: "Primata yang cerdas dan hidup dalam kelompok sosial.",
    },
    {
      name: "Babirusa",
      image: "/babi.png",
      sound: "/Audio/babi.mp3",
      location: "Sulawesi",
      description: "Hewan omnivora yang hidup di hutan dan daerah pertanian.",
    },
    {
      name: "Burung Kakatua Kecil Jambul Kuning",
      image: "/burung.png",
      sound: "/Audio/burung.mp3",
      location: "Nusa Tenggara",
      description: "Beragam spesies burung dengan warna dan suara yang khas.",
    },
    {
      name: "Kuda Sumba",
      image: "/kuda.png",
      sound: "/Audio/kuda.mp3",
      location: "Nusa Tenggara",
      description:
        "Hewan berkaki empat yang dikenal sebagai alat transportasi dan teman manusia.",
    },
    {
      name: "Komodo",
      image: "/komodo.png",
      sound: "/Audio/komodo.mp3",
      location: "Nusa Tenggara",
      description: "Kadal terbesar di dunia yang hanya ditemukan di Indonesia.",
    },
    {
      name: "Kaswari (Kasuarina)",
      image: "/kaswari.png",
      sound: "/Audio/kaswari.mp3",
      location: "Papua",
      description:
        "Burung besar yang tidak bisa terbang, hidup di hutan Papua.",
    },
  ];

  // Filter animals based on search term
  const filteredAnimals = animals.filter((animal) => {
    const searchLower = searchTerm.toLowerCase();
    return (
      animal.name.toLowerCase().includes(searchLower) ||
      animal.location.toLowerCase().includes(searchLower) ||
      animal.description.toLowerCase().includes(searchLower)
    );
  });

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const clearSearch = () => {
    setSearchTerm("");
  };

  return (
    <div className="bg-white">
      {/* Header gambar full width di belakang navbar - Responsive */}
      <div className="w-screen relative left-1/2 right-1/2 -mx-[50vw] -mt-[4rem]">
        <div
          className="bg-no-repeat bg-center bg-cover w-full 
               h-[calc(60vh-4rem)] md:h-[calc(120vh-4rem)]"
          style={{
            backgroundImage: `url(/foto.png)`,
          }}
        />
      </div>

      {/* Section untuk konten hewan */}
      <section className="container mx-auto px-4 py-12">
        {/* Judul dan deskripsi */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Satwa Liar Indonesia
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Temukan keanekaragaman hayati Indonesia melalui koleksi satwa liar
            kami yang unik dan dilindungi.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-md mx-auto mb-8">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg
                className="h-5 w-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-green-500 focus:border-green-500 text-sm"
              placeholder="Cari berdasarkan nama, lokasi, atau deskripsi..."
              value={searchTerm}
              onChange={handleSearchChange}
            />
            {searchTerm && (
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                <button
                  className="text-gray-400 hover:text-gray-600 focus:outline-none"
                  onClick={clearSearch}
                >
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Search Results Counter */}
        {searchTerm && (
          <div className="text-center mb-6">
            <p className="text-gray-600">
              {filteredAnimals.length === 0
                ? "Tidak ditemukan hasil untuk"
                : `Menampilkan ${filteredAnimals.length} hasil untuk`}{" "}
              <span className="font-semibold">"{searchTerm}"</span>
            </p>
          </div>
        )}

        {/* Grid kartu hewan */}
        {filteredAnimals.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {filteredAnimals.map((animal, index) => (
              <AnimalCard
                key={`${animal.name}-${index}`}
                name={animal.name}
                image={animal.image}
                sound={animal.sound}
                location={animal.location}
                description={animal.description}
              />
            ))}
          </div>
        ) : searchTerm ? (
          <div className="text-center py-12">
            <div className="text-gray-500 text-lg">
              <svg
                className="mx-auto h-12 w-12 text-gray-400 mb-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <p>Tidak ada satwa yang ditemukan</p>
              <p className="text-sm mt-2">
                Coba gunakan kata kunci yang berbeda atau{" "}
                <button
                  onClick={clearSearch}
                  className="text-green-600 hover:text-green-800 underline"
                >
                  hapus pencarian
                </button>
              </p>
            </div>
          </div>
        ) : null}
      </section>

      {/* Map Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Jejak Keanekaragaman Hayati Indonesia
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Peta interaktif ini menampilkan lokasi perlindungan satwa langka di
          seluruh kepulauan Indonesia. Klik marker untuk mengenal setiap
          spesies.
        </p>
      </div>
      <IndonesiaMap
        animals={filteredAnimals.length > 0 ? filteredAnimals : animals}
      />
    </div>
  );
}
