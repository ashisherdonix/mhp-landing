import Link from "next/link";
import { Brain, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-muted/30 border-t border-border/40">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company */}
          <div className="space-y-4">
            <Link href="/" className="inline-block group">
              <div className="relative">
                <span className="text-lg font-bold tracking-tight">
                  <span className="text-primary drop-shadow-sm">EMP</span>
                  <span className="text-secondary drop-shadow-sm">H</span>
                  <span className="text-accent drop-shadow-sm">IO</span>
                </span>
                <div className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-gradient-to-r from-primary via-secondary to-accent rounded-full transition-all duration-300 group-hover:w-full"></div>
              </div>
            </Link>
            <p className="text-sm text-muted-foreground">
              India's first AI-powered mental health platform designed exclusively for schools.
            </p>
            <div className="flex space-x-4">
              <div className="text-xs bg-secondary/10 px-2 py-1 rounded">Privacy First</div>
              <div className="text-xs bg-primary/10 px-2 py-1 rounded">ISO 27001</div>
            </div>
          </div>

          {/* Platform */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Platform</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/how-it-works" className="hover:text-foreground transition-colors">How It Works</Link></li>
              <li><Link href="/pricing" className="hover:text-foreground transition-colors">Pricing</Link></li>
              <li><Link href="/security" className="hover:text-foreground transition-colors">Security & Compliance</Link></li>
              <li><Link href="/integration" className="hover:text-foreground transition-colors">School Integrations</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Resources</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/case-studies" className="hover:text-foreground transition-colors">Case Studies</Link></li>
              <li><Link href="/research" className="hover:text-foreground transition-colors">Research & Data</Link></li>
              <li><Link href="/implementation" className="hover:text-foreground transition-colors">Implementation Guide</Link></li>
              <li><Link href="/support" className="hover:text-foreground transition-colors">Support Center</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Get Started</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/demo" className="hover:text-foreground transition-colors">Book Demo</Link></li>
              <li><Link href="/contact" className="hover:text-foreground transition-colors">Contact Sales</Link></li>
              <li><Link href="/about" className="hover:text-foreground transition-colors">About Us</Link></li>
            </ul>
            <div className="pt-4">
              <div className="flex items-center text-xs text-muted-foreground mb-1">
                <Mail className="w-3 h-3 mr-2" />
                schools@emphio.com
              </div>
              <div className="flex items-center text-xs text-muted-foreground">
                <Phone className="w-3 h-3 mr-2" />
                +91-800-SCHOOLS
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border/40 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-muted-foreground">
            © 2024 Emphio. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Terms of Service
            </Link>
            <Link href="/compliance" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Compliance
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}