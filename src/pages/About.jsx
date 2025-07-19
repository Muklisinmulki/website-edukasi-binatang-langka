export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row gap-8 items-center">
        <div className="md:w-1/3">
          <img 
            src="foto.jpeg" 
            alt="Foto Saya"
            className="w-full rounded-lg shadow-lg border-4 border-green-100"
          />
        </div>
        <div className="md:w-2/3">
          <h1 className="text-4xl font-bold text-green-800 mb-6">Tentang Saya</h1>
          <div className="space-y-6 text-gray-700">
            <p className="text-lg leading-relaxed">
              Sejak kecil, saya selalu terpesona oleh buku-buku bergambar hewan yang penuh warna. Kini, banyak dari hewan-hewan tersebut terancam punah, dan itulah yang menginspirasi saya untuk menciptakan <span className="font-semibold text-green-600">LestariFauna</span>.
            </p>
            
            <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
              <h2 className="text-xl font-semibold mb-3 text-green-800">Visi LestariFauna</h2>
              <p className="mb-3">
                Platform ini dibuat untuk meningkatkan kesadaran tentang hewan-hewan yang terancam punah dan mengajak masyarakat turut serta dalam upaya pelestariannya.
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Mendokumentasikan spesies langka Indonesia</li>
                <li>Mengedukasi generasi muda tentang keanekaragaman hayati</li>
              </ul>
            </div>
            
            <p>
              Melalui teknologi website, saya berharap dapat menghubungkan kecintaan masa kecil saya dengan aksi nyata untuk menyelamatkan kekayaan alam Indonesia.
            </p>
          </div>
        </div>
      </div>
      
      <div className="mt-16 bg-amber-50 p-8 rounded-xl">
        <h2 className="text-2xl font-bold text-amber-800 mb-4">Kenapa Ini Penting?</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-5 rounded-lg shadow-md">
            <h3 className="font-semibold text-lg mb-2 text-amber-700">Anak-anak Masa Kini</h3>
            <p>Mereka mungkin tidak lagi memiliki kesempatan melihat hewan-hewan ini selain melalui gambar, seperti yang saya alami dulu.</p>
          </div>
          <div className="bg-white p-5 rounded-lg shadow-md">
            <h3 className="font-semibold text-lg mb-2 text-amber-700">Keseimbangan Ekosistem</h3>
            <p>Setiap spesies yang punah akan mengganggu rantai makanan dan berdampak pada kehidupan manusia.</p>
          </div>
        </div>
      </div>
    </div>
  )
}