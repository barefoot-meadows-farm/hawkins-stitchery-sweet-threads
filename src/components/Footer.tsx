
import React from "react";
import { Link } from "react-router-dom";
import { Scissors, MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-[#6B4226] text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <Scissors className="h-6 w-6 text-white" />
              <span className="font-serif font-bold text-lg text-white">Hawkins Little Stitchery</span>
            </Link>
            <p className="text-white/80 text-sm">
              Bringing tradition, quality, and care to every stitch since 1968.
            </p>
          </div>
          
          <div>
            <h3 className="font-serif font-bold text-lg mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-white/80 mr-2 mt-0.5" />
                <span className="text-white/80">123 Stitchery Lane<br />Hawkins Town, HT 12345</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-white/80 mr-2" />
                <span className="text-white/80">(555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-white/80 mr-2" />
                <span className="text-white/80">mshawkins@littlestitchery.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/80 text-sm mb-4 md:mb-0">
            &copy; {currentYear} Hawkins Little Stitchery. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
