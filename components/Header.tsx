"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Brain, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="border-b-2 border-border/60 bg-background/98 backdrop-blur supports-[backdrop-filter]:bg-background/80 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <div className="relative">
              {/* Clean Professional Logo */}
              <span className="text-2xl font-bold tracking-tight">
                <span className="text-primary drop-shadow-sm">EMP</span>
                <span className="text-secondary drop-shadow-sm">H</span>
                <span className="text-accent drop-shadow-sm">IO</span>
              </span>
              {/* Subtle underline - only on hover for professional contexts */}
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary via-secondary to-accent rounded-full transition-all duration-300 group-hover:w-full"></div>
            </div>
            {/* Single color fallback (hidden, available for print CSS) */}
            <span className="hidden print:block text-2xl font-bold tracking-tight text-gray-800">EMPHIO</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/how-it-works" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              How It Works
            </Link>
            <Link href="/about" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              About
            </Link>
            <Link href="/issues" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Issues We Address
            </Link>
            <Link href="/security" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Data Privacy
            </Link>
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center">
            <Button asChild className="font-semibold shadow-sm">
              <Link href="/demo">Get Started</Link>
            </Button>
          </div>

          {/* Mobile CTA + Menu Button */}
          <div className="flex items-center space-x-2 md:hidden">
            <Button size="sm" asChild className="font-semibold shadow-sm">
              <Link href="/demo">Start</Link>
            </Button>
            <Button 
              variant="ghost" 
              size="sm"
              onClick={toggleMenu}
              className="p-2"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border/40 bg-background">
            <nav className="px-4 py-6 space-y-4">
              <Link 
                href="/how-it-works" 
                className="block text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                How It Works
              </Link>
              <Link 
                href="/about" 
                className="block text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                href="/issues" 
                className="block text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Issues We Address
              </Link>
              <Link 
                href="/security" 
                className="block text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Data Privacy
              </Link>
              
              {/* Mobile CTA Button */}
              <div className="pt-4">
                <Button className="w-full" asChild>
                  <Link href="/demo" onClick={() => setIsMenuOpen(false)}>
                    Get Started
                  </Link>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}