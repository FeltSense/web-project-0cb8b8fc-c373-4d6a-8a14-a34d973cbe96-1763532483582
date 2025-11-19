'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 border-t border-gray-800">
  <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-24 lg:py-32">
    <div className="grid md:grid-cols-4 gap-8 md:gap-12 lg:gap-16">
      {/* Company Section */}
      <div>
        <h3 className="text-white text-lg font-semibold mb-6">Retail Business</h3>
        <p className="text-gray-400 text-sm leading-relaxed mb-6">
          Transforming retail with innovative solutions and customer-focused excellence.
        </p>
        <div className="flex gap-4 mt-6">
          <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.953 4.57a10 10 0 002.856-3.51 10 10 0 01-2.856.17 10 10 0 01-2.856-.17c.78 2.8 1.08 5.5.78 8.2 0 .6-.04 1.2-.12 1.8a10 10 0 01-5.52 3.6c.12.6.28 1.2.48 1.8a10 10 0 005.52-3.6c.08.6.12 1.2.12 1.8 0 2.6-.84 5.2-2.4 7.2a10 10 0 002.4-7.2c0-.6-.04-1.2-.12-1.8a10 10 0 015.52 3.6c.2-.6.36-1.2.48-1.8a10 10 0 01-5.52-3.6c.08-.6.12-1.2.12-1.8 0-2.6-.84-5.2-2.4-7.2a10 10 0 01-2.4 7.2"/>
            </svg>
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z"/>
              <circle cx="12" cy="12" r="3.308"/>
              <circle cx="18.27" cy="5.73" r=".772"/>
            </svg>
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.731-2.004 1.436-.103.25-.129.599-.129.949v5.42h-3.554s.047-8.733 0-9.646h3.554v1.364c.429-.646 1.196-1.567 2.905-1.567 2.12 0 3.714 1.388 3.714 4.373v5.476zM5.337 8.855c-1.144 0-1.915-.758-1.915-1.704 0-.948.77-1.704 1.959-1.704 1.188 0 1.914.756 1.938 1.704 0 .946-.75 1.704-1.982 1.704zm1.581 11.597H3.714V9.505h3.204v10.947zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
        </div>
      </div>

      {/* Services Section */}
      <div>
        <h3 className="text-white text-lg font-semibold mb-6">Services</h3>
        <ul className="space-y-2">
          <li>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
              Point of Sale
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
              Inventory Management
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
              Customer Analytics
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
              Staff Training
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
              Support & Maintenance
            </a>
          </li>
        </ul>
      </div>

      {/* Company Links */}
      <div>
        <h3 className="text-white text-lg font-semibold mb-6">Company</h3>
        <ul className="space-y-2">
          <li>
            <a href="/" className="text-gray-400 hover:text-white transition-colors duration-300">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="text-gray-400 hover:text-white transition-colors duration-300">
              About Us
            </a>
          </li>
          <li>
            <a href="#portfolio" className="text-gray-400 hover:text-white transition-colors duration-300">
              Solutions
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
              Blog
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
              Careers
            </a>
          </li>
        </ul>
      </div>

      {/* Contact Section */}
      <div>
        <h3 className="text-white text-lg font-semibold mb-6">Get In Touch</h3>
        <div className="space-y-4">
          <div>
            <p className="text-gray-400 text-sm font-medium mb-1">Email</p>
            <a href="mailto:hello@retailbusiness.com" className="text-gray-300 hover:text-white transition-colors duration-300 text-sm">
              hello@retailbusiness.com
            </a>
          </div>
          <div>
            <p className="text-gray-400 text-sm font-medium mb-1">Phone</p>
            <a href="tel:+1-800-123-4567" className="text-gray-300 hover:text-white transition-colors duration-300 text-sm">
              +1 (800) 123-4567
            </a>
          </div>
          <div>
            <p className="text-gray-400 text-sm font-medium mb-1">Hours</p>
            <p className="text-gray-300 text-sm">
              Mon - Fri: 9AM - 6PM<br/>
              Sat - Sun: Closed
            </p>
          </div>
        </div>
      </div>
    </div>

    {/* Bottom Section */}
    <div className="mt-12 pt-8 border-t border-gray-800">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-gray-400 text-sm text-center md:text-left">
          © 2025 Retail Business. All rights reserved.
        </p>
        <div className="flex gap-6">
          <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">
            Privacy Policy
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">
            Terms of Service
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">
            Cookie Settings
          </a>
        </div>
      </div>
    </div>
  </div>
</footer>
  );
}