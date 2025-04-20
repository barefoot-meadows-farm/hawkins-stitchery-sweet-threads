
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Scissors } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const Header = () => {
  const isMobile = useIsMobile();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-[#FDE1D3]/80 shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <NavLink to="/" className="flex items-center space-x-2">
            <Scissors className="h-7 w-7 text-[#8B5A3C]" />
            <span className="font-serif font-bold text-xl text-[#6B4226]">Hawkins Little Stitchery</span>
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Header;
