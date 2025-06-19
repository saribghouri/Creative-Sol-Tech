import { Facebook, Linkedin, MapPin, Mail, Phone } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12  relative">
        <div className="bg-[#2188b1] h-[2px] mb-[20px]"></div>
      <div className="max-w-8xl mx-auto flex flex-col justify-center bg-black ">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-32 mb-8 ml-[80px]">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-[#2188b1] rounded flex items-center justify-center">
                <div className="w-4 h-4 bg-black rounded-sm transform rotate-45"></div>
              </div>
              <div>
                <h3 className="text-[30px] font-bold">Creative-sol-tech</h3>
                <p className="text-sm text-gray-300">Ventures</p>
              </div>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed max-w-lg">
              We are a full-service marketing and advertising agency located in the<br></br> heart of Karachi. From concept to
              execution, we're dedicated to helping your brand stand out and shine.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-xl font-semibold">Quick Links</h4>
            <nav className="flex flex-row gap-12 space-y-8">
              <a href="#" className="text-gray-300 hover:text-white transition-colors text-lg">
                Home
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors text-lg">
                About Us
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors text-lg">
                Services
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors text-lg">
                Contact
              </a>
            </nav>

            {/* Newsletter Subscription */}
            <div className="mt-6 space-y-3">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="flex-1 px-4 py-2 bg-transparent border-b border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-[#2188b1]"
                />
                <button className="ml-4 px-10 py-2 cursor-pointer bg-[#2188b1] text-lg text-white font-medium rounded hover:bg-[#2188b1] transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-[24px] font-semibold">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-6 h-6 text-[#2188b1] mt-1 flex-shrink-0" />
                <p className="text-gray-300 text-lg">
                  Plot no C-18-F, burj-ul-minal Floor 304
                  <br />
                  munawar chowrangi no.4, johor,
                  <br />
                  Karachi-75500, Pakistan.
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-6 h-6 text-[#2188b1] flex-shrink-0" />
                <div className="text-gray-300 text-lg">
                  <p>Creative-sol-tech@gmail.com</p>
         
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-6 h-6 text-[#2188b1] flex-shrink-0" />
                <p className="text-gray-300 text-lg">+92 323 3372009</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between text-center items-center">
          <p className="text-gray-400 text-lg mb-4 md:mb-0">© 2025 Creative sol tech. All Rights Reserved.</p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* WhatsApp Floating Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <a
          href="https://wa.me/923233372009"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition-colors"
        >
          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
          </svg>
        </a>
      </div>
    </footer>
  )
}
