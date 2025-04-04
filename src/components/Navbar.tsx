
import React from 'react';
import { Button } from '@/components/ui/button';
import { Globe, Menu } from 'lucide-react';
import { Link } from 'react-router-dom';
import { WalletConnect } from './WalletConnect';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <nav className="w-full py-4 bg-white border-b border-gray-100">
      <div className="container flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Globe className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold">GlobalAid</span>
        </div>

        {/* Desktop navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link to="/" className="text-sm font-medium hover:text-primary">Home</Link>
          <a href="#active-relief" className="text-sm font-medium hover:text-primary">Active Relief</a>
          <a href="#how-it-works" className="text-sm font-medium hover:text-primary">How It Works</a>
          <a href="#about" className="text-sm font-medium hover:text-primary">About</a>
          <Link to="/technical-architecture" className="text-sm font-medium hover:text-primary">Tech Docs</Link>
        </div>

        <div className="hidden md:block">
          <WalletConnect />
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {/* Mobile navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute z-50 w-full bg-white shadow-lg py-4 px-6">
          <div className="flex flex-col space-y-4">
            <Link to="/" className="text-sm font-medium hover:text-primary">Home</Link>
            <a href="#active-relief" className="text-sm font-medium hover:text-primary">Active Relief</a>
            <a href="#how-it-works" className="text-sm font-medium hover:text-primary">How It Works</a>
            <a href="#about" className="text-sm font-medium hover:text-primary">About</a>
            <Link to="/technical-architecture" className="text-sm font-medium hover:text-primary">Tech Docs</Link>
            <WalletConnect />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
