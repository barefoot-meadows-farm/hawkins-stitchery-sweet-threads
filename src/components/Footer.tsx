
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#6B4226] text-white py-4">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-white/80 text-sm">
            Powered by{" "}
            <a 
              href="https://www.binarybloom.dev" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-white/80 underline transition-colors"
            >
              Binary Bloom
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
