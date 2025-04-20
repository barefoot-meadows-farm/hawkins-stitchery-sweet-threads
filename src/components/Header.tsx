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
          
          {isMobile ? (
            <>
              <button
                onClick={toggleMenu}
                className="text-[#6B4226] focus:outline-none"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-6 w-6" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
              
              {isMenuOpen && (
                <div className="absolute top-16 left-0 right-0 bg-[#FDE1D3] shadow-md z-50">
                  <nav className="flex flex-col p-4">
                    <NavItem to="/" onClick={() => setIsMenuOpen(false)}>Home</NavItem>
                    <NavItem to="/gallery" onClick={() => setIsMenuOpen(false)}>Gallery</NavItem>
                    <NavItem to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</NavItem>
                  </nav>
                </div>
              )}
            </>
          ) : (
            <nav className="flex items-center space-x-6">
              <NavItem to="/">Home</NavItem>
              <NavItem to="/gallery">Gallery</NavItem>
              <NavItem to="/contact">Contact</NavItem>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
};

interface NavItemProps {
  to: string;
  children: React.ReactNode;
  onClick?: () => void;
}

const NavItem = ({ to, children, onClick }: NavItemProps) => (
  <NavLink
    to={to}
    onClick={onClick}
    className={({ isActive }) => 
      `font-serif text-[#6B4226] hover:text-[#8B5A3C] transition-colors duration-200 py-2 ${
        isActive ? 'font-bold border-b-2 border-[#8B5A3C]' : ''
      }`
    }
  >
    {children}
  </NavLink>
);

export default Header;
