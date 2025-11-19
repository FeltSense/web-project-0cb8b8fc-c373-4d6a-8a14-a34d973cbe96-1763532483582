'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <nav className="w-full bg-white border-b border-slate-200 sticky top-0 z-40 shadow-sm">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex items-center justify-between h-16">
      {/* Logo */}
      <div className="flex-shrink-0 flex items-center gap-2">
        <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-teal-500 rounded-lg flex items-center justify-center">
          <span className="text-white font-bold text-sm">RB</span>
        </div>
        <span className="text-xl font-bold text-slate-900 hidden sm:inline">Retail Business</span>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-1">
        <a href="/" className="px-4 py-2 text-slate-700 hover:text-blue-600 font-medium text-sm transition-colors duration-200 rounded-lg hover:bg-slate-50">
          Home
        </a>
        <a href="#about" className="px-4 py-2 text-slate-700 hover:text-blue-600 font-medium text-sm transition-colors duration-200 rounded-lg hover:bg-slate-50">
          About
        </a>
        <a href="#portfolio" className="px-4 py-2 text-slate-700 hover:text-blue-600 font-medium text-sm transition-colors duration-200 rounded-lg hover:bg-slate-50">
          Portfolio
        </a>
      </div>

      {/* Desktop CTA */}
      <div className="hidden md:flex items-center gap-3">
        <button className="px-4 py-2 text-slate-700 hover:text-slate-900 font-medium text-sm transition-colors">
          Sign In
        </button>
        <button className="px-4 py-2 bg-gradient-to-r from-blue-600 to-teal-500 text-white font-medium text-sm rounded-lg hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-200 transform hover:scale-105">
          Get Started
        </button>
      </div>

      {/* Mobile Menu Button */}
      <button className="md:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors" aria-label="Toggle menu">
        <svg className="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </div>
  </div>

  {/* Mobile Navigation Drawer */}
  <div className="md:hidden border-t border-slate-200 bg-white">
    <div className="px-4 pt-2 pb-4 space-y-2">
      <a href="/" className="block px-4 py-2 text-slate-700 hover:text-blue-600 font-medium text-sm rounded-lg hover:bg-slate-50 transition-colors">
        Home
      </a>
      <a href="#about" className="block px-4 py-2 text-slate-700 hover:text-blue-600 font-medium text-sm rounded-lg hover:bg-slate-50 transition-colors">
        About
      </a>
      <a href="#portfolio" className="block px-4 py-2 text-slate-700 hover:text-blue-600 font-medium text-sm rounded-lg hover:bg-slate-50 transition-colors">
        Portfolio
      </a>
      <div className="pt-2 border-t border-slate-200 mt-2 space-y-2">
        <button className="w-full px-4 py-2 text-slate-700 hover:text-slate-900 font-medium text-sm rounded-lg hover:bg-slate-50 transition-colors text-left">
          Sign In
        </button>
        <button className="w-full px-4 py-2 bg-gradient-to-r from-blue-600 to-teal-500 text-white font-medium text-sm rounded-lg hover:shadow-lg hover:shadow-blue-500/20 transition-all">
          Get Started
        </button>
      </div>
    </div>
  </div>
</nav>
  );
}