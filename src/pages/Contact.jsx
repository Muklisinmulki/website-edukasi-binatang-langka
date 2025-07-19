export default function Contact() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-16 sm:py-24">
      <div className="bg-white rounded-xl shadow-md p-6 sm:p-8">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Contact Us</h1>
        
        {/* Social Media Links */}
        <div className="flex justify-center space-x-6 mb-8">
          <a 
            href="https://www.linkedin.com/in/muklisin19/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-800 transition transform hover:scale-110"
            aria-label="LinkedIn"
          >
            <i className="fab fa-linkedin text-3xl"></i>
          </a>
          <a 
            href="mailto:muklisinm29@gmail.com" 
            className="text-gray-600 hover:text-gray-800 transition transform hover:scale-110"
            aria-label="Email"
          >
            <i className="fas fa-envelope text-3xl"></i>
          </a>
          <a 
            href="https://github.com/Muklisinmulki" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-800 hover:text-black transition transform hover:scale-110"
            aria-label="GitHub"
          >
            <i className="fab fa-github text-3xl"></i>
          </a>
        </div>
        
        {/* Divider */}
        <div className="relative mb-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="bg-white px-4 text-gray-500">Or send us a message</span>
          </div>
        </div>
        
        {/* Contact Form */}
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
              placeholder="Your name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
              placeholder="your.email@example.com"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
              Message
            </label>
            <textarea
              id="message"
              rows="5"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
              placeholder="Your message here..."
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition transform hover:scale-[1.02] shadow-md"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  )
}