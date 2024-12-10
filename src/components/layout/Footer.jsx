import { Link } from 'react-router-dom';
import {
  Instagram,
  Linkedin,
  Twitter,
  Github,
  Mail
} from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 py-8">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-extrabold mb-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              JTech Solutions
            </h2>
            <p className="text-gray-600 mb-4 text-sm">
              Innovating technology solutions that transform businesses and empower digital experiences.
            </p>

            <div className="flex justify-center md:justify-start space-x-4">
              {[
                { Icon: Instagram, href: '#' },
                { Icon: Linkedin, href: '#' },
                { Icon: Twitter, href: '#' },
                { Icon: Github, href: '#' }
              ].map(({ Icon, href }) => (
                <a
                  key={href}
                  href={href}
                  className="text-gray-500 hover:text-primary transition-all duration-300 hover:scale-110"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-lg font-semibold mb-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Quick Links
            </h3>
            <div className="flex flex-col space-y-2">
              {[
                { name: 'Home', href: '/' },
                { name: 'About', href: '/about' },
                { name: 'Services', href: '/services' },
                { name: 'Contact', href: '/contact' },
                { name: 'Privacy Policy', href: '/privacy' }
              ].map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-gray-600 text-sm hover:text-primary hover:translate-x-1 transition-all duration-300"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="text-center md:text-right">
            <h3 className="text-lg font-semibold mb-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Contact Us
            </h3>
            <div className="space-y-2">
              <p className="text-gray-600 text-sm">+1 (555) 123-4567</p>
              <div className="flex items-center justify-center md:justify-end space-x-2">
                <Mail size={16} className="text-gray-500" />
                <a
                  href="mailto:contact@jtech.com"
                  className="text-gray-600 text-sm hover:text-primary transition-colors"
                >
                  contact@jtech.com
                </a>
              </div>
              <p className="text-gray-600 text-sm">123 Tech Lane, Innovation City</p>
            </div>
          </div>
        </div>
        <div className="mt-6 pt-4 border-t text-center">
          <p className="text-xs text-gray-500 tracking-wider">
            © {new Date().getFullYear()} JTech Solutions. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;