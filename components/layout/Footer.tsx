"use client"

import Link from "next/link"
import { Send, Mail, Phone, MapPin } from "lucide-react"
import { FaFacebook, FaXTwitter, FaInstagram, FaLinkedin } from "react-icons/fa6"

import { Container } from "@/components/layout/Container"
import { Button } from "@/components/ui/Button"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-background border-t pt-20 pb-10">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Company Info */}
          <div className="space-y-6">
            <Link 
              href="/" 
              className="flex items-center gap-2 text-xl font-bold tracking-tighter"
              aria-label="Clinet-1 Home"
            >
              <div className="size-8 rounded-lg bg-accent text-accent-foreground flex items-center justify-center">
                <span className="font-extrabold text-lg">C</span>
              </div>
              Clinet-1
            </Link>
            <p className="text-muted-foreground leading-relaxed max-w-xs">
              Redefining modern luxury architecture through sustainable design and master craftsmanship.
            </p>
            <div className="flex items-center gap-2 -ml-2">
              <Link href="#" aria-label="Facebook" className="p-2 text-muted-foreground hover:text-accent transition-colors">
                <FaFacebook className="size-5" />
              </Link>
              <Link href="#" aria-label="Twitter" className="p-2 text-muted-foreground hover:text-accent transition-colors">
                <FaXTwitter className="size-5" />
              </Link>
              <Link href="#" aria-label="Instagram" className="p-2 text-muted-foreground hover:text-accent transition-colors">
                <FaInstagram className="size-5" />
              </Link>
              <Link href="#" aria-label="LinkedIn" className="p-2 text-muted-foreground hover:text-accent transition-colors">
                <FaLinkedin className="size-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-foreground">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'About Us', 'Portfolio', 'Process', 'Testimonials'].map((item) => (
                <li key={item}>
                  <Link href="#" className="py-2 text-muted-foreground hover:text-accent transition-colors inline-flex items-center gap-2 group">
                    <span className="w-0 h-[1px] bg-accent transition-all duration-300 group-hover:w-4" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-foreground">Contact Us</h4>
            <ul className="space-y-2">
              <li className="flex items-start gap-3 py-2 text-muted-foreground hover:text-accent transition-colors">
                <MapPin className="size-5 shrink-0 mt-0.5" />
                <span>123 Luxury Ave, Suite 500<br />New York, NY 10001</span>
              </li>
              <li>
                <a href="tel:+1234567890" className="flex items-center gap-3 py-2 text-muted-foreground hover:text-accent transition-colors">
                  <Phone className="size-5 shrink-0" />
                  <span>+1 (234) 567-890</span>
                </a>
              </li>
              <li>
                <a href="mailto:hello@clinet-1.com" className="flex items-center gap-3 py-2 text-muted-foreground hover:text-accent transition-colors">
                  <Mail className="size-5 shrink-0" />
                  <span>hello@clinet-1.com</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-foreground">Newsletter</h4>
            <p className="text-muted-foreground mb-4">
              Subscribe to receive the latest updates, architectural insights, and exclusive invitations.
            </p>
            <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
              <div className="relative">
                <label htmlFor="email" className="sr-only">Email address</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  required
                  className="w-full bg-secondary/50 border border-border rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all placeholder:text-muted-foreground"
                />
                <Button type="submit" size="icon" className="absolute right-1 top-1 bottom-1 h-auto w-10">
                  <Send className="size-4" />
                  <span className="sr-only">Subscribe</span>
                </Button>
              </div>
            </form>
          </div>

        </div>

        {/* Copyright */}
        <div className="pt-8 border-t flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© {currentYear} Clinet-1 Architecture. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="#" className="hover:text-accent transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-accent transition-colors">Terms of Service</Link>
          </div>
        </div>
      </Container>
    </footer>
  )
}
