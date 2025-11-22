import { Github, Twitter, Linkedin } from 'lucide-react';

const footerLinks = {
  Product: ['Features', 'Pricing', 'Security', 'Roadmap', 'Changelog'],
  Company: ['About', 'Careers', 'Blog', 'Press Kit', 'Contact'],
  Resources: ['Documentation', 'API Reference', 'Guides', 'Community', 'Support'],
  Legal: ['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'DPA', 'Compliance'],
};

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-blue-900 via-slate-900 to-blue-950 text-gray-300 py-16 px-6 border-t border-blue-800/50">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-5 gap-12 mb-12">
          <div className="md:col-span-1">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 relative mr-3">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500 via-orange-600 to-orange-400 rounded-full blur-sm opacity-50"></div>
                <div className="relative w-full h-full bg-gradient-to-r from-orange-500 via-orange-600 to-orange-400 rounded-full"></div>
              </div>
              <span className="text-white text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent">
                WRIM
              </span>
            </div>
            <p className="text-sm mb-4 text-gray-400">
              Technology that lives beyond time. We are immortals.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-white font-semibold mb-4">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm hover:text-white transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-blue-800/50 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} WRIM. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="hover:text-white transition-colors">
                Status
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Sitemap
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Security
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
