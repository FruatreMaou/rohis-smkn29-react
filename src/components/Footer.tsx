import { Link } from "react-router-dom";
import { Facebook, Instagram, Youtube, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center">
                <span className="text-secondary-foreground font-bold text-xl">R</span>
              </div>
              <div>
                <h3 className="text-lg font-bold">ROHIS</h3>
                <p className="text-sm opacity-90">SMKN 29 Jakarta</p>
              </div>
            </div>
            <p className="text-sm opacity-80 leading-relaxed">
              Organisasi Rohani Islam yang berkomitmen membentuk generasi muslim yang berakhlak mulia dan berprestasi.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Tautan Cepat</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                  Beranda
                </Link>
              </li>
              <li>
                <Link to="/profil" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                  Profil
                </Link>
              </li>
              <li>
                <Link to="/kegiatan" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                  Kegiatan
                </Link>
              </li>
              <li>
                <Link to="/galeri" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                  Galeri
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Kontak</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0 opacity-80" />
                <span className="text-sm opacity-80">
                  SMKN 29 Jakarta, Jl. Balai Rakyat, Jakarta Timur
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 flex-shrink-0 opacity-80" />
                <span className="text-sm opacity-80">(021) 1234-5678</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 flex-shrink-0 opacity-80" />
                <span className="text-sm opacity-80">rohis@smkn29jkt.sch.id</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Ikuti Kami</h4>
            <div className="flex space-x-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary-foreground/10 hover:bg-primary-foreground/20 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary-foreground/10 hover:bg-primary-foreground/20 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary-foreground/10 hover:bg-primary-foreground/20 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
            <p className="mt-4 text-sm opacity-80">
              Tetap terhubung dengan kegiatan dan informasi terbaru dari ROHIS SMKN 29 Jakarta.
            </p>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-sm opacity-80">
            © {currentYear} ROHIS SMKN 29 Jakarta. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
