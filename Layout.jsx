import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Home,
  Info,
  BookOpen,
  Calendar,
  Heart,
  Newspaper,
  Phone,
  Menu,
  X
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Layout({ children, currentPageName }) {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const navigationItems = [
    { title: "Home", url: "/", icon: Home },
    { title: "About", url: "/about", icon: Info },
    { title: "Contact", url: "/contact", icon: Phone },
    { title: "Donate", url: "/donate", icon: Heart },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <style jsx>{`
        :root {
          --primary-teal: #1F5B5A;
          --primary-gold: #B8860B;
          --light-teal: #E6F3F3;
          --warm-white: #FEFEFE;
          --soft-gray: #F8F9FA;
        }
      `}</style>

      {/* Header */}
      <header className="bg-white shadow-lg relative">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3">
              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_68d210e132dc575977550d92/b4c7fbb48_image.png"
                alt="Dar Alhikma Foundation"
                className="h-12 w-12"
              />
              <div>
                <h1 className="text-xl font-bold text-[#1F5B5A]">DAR ALHIKMA</h1>
                <p className="text-sm text-[#B8860B] font-medium">Islamic Foundation</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <Link
                  key={item.title}
                  to={item.url}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                    location.pathname === item.url
                      ? "bg-[#1F5B5A] text-white"
                      : "text-[#1F5B5A] hover:bg-[#E6F3F3]"
                  }`}
                >
                  <item.icon className="w-4 h-4" />
                  <span className="font-medium">{item.title}</span>
                </Link>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden text-[#1F5B5A]"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t z-50">
            <nav className="container mx-auto px-4 py-4">
              {navigationItems.map((item) => (
                <Link
                  key={item.title}
                  to={item.url}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg mb-2 transition-all duration-200 ${
                    location.pathname === item.url
                      ? "bg-[#1F5B5A] text-white"
                      : "text-[#1F5B5A] hover:bg-[#E6F3F3]"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <item.icon className="w-5 h-5" />
                  <span className="font-medium">{item.title}</span>
                </Link>
              ))}
            </nav>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-[#1F5B5A] text-white">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Foundation Info */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <img
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_68d210e132dc575977550d92/b4c7fbb48_image.png"
                  alt="Dar Alhikma Foundation"
                  className="h-10 w-10"
                />
                <div>
                  <h3 className="text-lg font-bold">DAR ALHIKMA</h3>
                  <p className="text-[#B8860B] text-sm font-medium">Islamic Foundation</p>
                </div>
              </div>
              <p className="text-gray-300 mb-4">
                Dedicated to spreading Islamic knowledge, building community, and fostering
                spiritual growth through education, outreach, and charitable works.
              </p>
              <p className="text-sm text-gray-400">
                "And say: My Lord, increase me in knowledge." - Quran 20:114
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/about" className="text-gray-300 hover:text-[#B8860B] transition-colors">About Us</Link></li>
                <li><Link to="/contact" className="text-gray-300 hover:text-[#B8860B] transition-colors">Contact Us</Link></li>
                <li><Link to="/donate" className="text-gray-300 hover:text-[#B8860B] transition-colors">Support Our Mission</Link></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Get in Touch</h4>
              <div className="space-y-2 text-sm text-gray-300">
                <p>📧 Admin@daral-hikmah.org</p>
                <p>📞 +1 (347) 335-7447</p>
                <p>📍 2929 Spotted Fawn Dr<br />Fort Worth, TX 76108</p>
                <div className="mt-4">
                  <a
                    href="https://www.facebook.com/daralhikmafondation?mibextid=ZbWKwL"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-[#B8860B] transition-colors"
                  >
                    📘 Follow us on Facebook
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-[#2A6B6A] mt-8 pt-6 text-center text-sm text-gray-400">
            <p>&copy; 2024 Dar Alhikma Islamic Foundation. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
