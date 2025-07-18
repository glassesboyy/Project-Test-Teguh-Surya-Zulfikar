"use client";

import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const Header = () => {
  const [show, setShow] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const lastScrollY = useRef(0);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < lastScrollY.current) {
        setShow(true);
      } else {
        setShow(false);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isMobileMenuOpen && !target.closest("[data-mobile-menu]")) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener("click", handleClickOutside);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const menuItems = [
    { name: "Work", href: "/work" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Ideas", href: "/ideas" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        show
          ? "translate-y-0 bg-primary/95 backdrop-blur-md border-b border-primary/20 shadow-lg"
          : "-translate-y-full"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center group">
          <div className="flex items-center text-primary-foreground font-bold text-xl transition-transform duration-200 group-hover:scale-105">
            <Image
              src="/logo.png"
              alt="Suitmedia Logo"
              width={120}
              height={40}
              className="mr-3 transition-opacity duration-200 group-hover:opacity-90"
              priority
            />
          </div>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-8">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`relative text-primary-foreground font-medium text-sm tracking-wide transition-all duration-200 hover:text-primary-foreground/80 group ${
                pathname === item.href ? "text-primary-foreground" : ""
              }`}
            >
              <span className="relative z-10">{item.name}</span>
              {pathname === item.href && (
                <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary-foreground rounded-full"></div>
              )}
              <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary-foreground/50 rounded-full scale-x-0 transition-transform duration-200 group-hover:scale-x-100"></div>
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleMobileMenu}
          data-mobile-menu
          className="md:hidden text-primary-foreground hover:bg-primary-foreground/10"
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </Button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40" />
      )}

      {/* Mobile Menu */}
      <div
        data-mobile-menu
        className={`fixed top-0 right-0 h-full w-80 bg-primary border-l border-primary/20 z-50 transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between p-6 border-b border-primary/20">
            <Image
              src="/logo.png"
              alt="Suitmedia Logo"
              width={100}
              height={33}
              className="transition-opacity duration-200"
            />
            <Button
              variant="ghost"
              size="icon"
              onClick={closeMobileMenu}
              className="text-primary-foreground hover:bg-primary-foreground/10"
              aria-label="Close mobile menu"
            >
              <X className="h-6 w-6" />
            </Button>
          </div>

          {/* Mobile Menu Items */}
          <nav className="flex-1 p-6">
            <ul className="space-y-4">
              {menuItems.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    onClick={closeMobileMenu}
                    className={`block py-3 px-4 rounded-lg text-primary-foreground font-medium text-lg transition-all duration-200 hover:bg-primary-foreground/10 ${
                      pathname === item.href
                        ? "bg-primary-foreground/20 border-l-4 border-primary-foreground"
                        : ""
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
