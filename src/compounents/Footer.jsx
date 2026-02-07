import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer
      className="pt-20 footer pb-10 z-50"
      style={{
        color: "var(--text-secondary)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 z-50">
        {/* Top Grid */}
        <div
          className="grid md:grid-cols-4 gap-10 border-b pb-12"
          style={{ borderColor: "var(--card-border)" }}
        >
          {/* Brand */}
          <div>
            <img src="/logoz.png" alt="Syvairo" className="w-36 mb-4" />
            <p className="text-sm leading-relaxed">
              End-to-end AI agents & automation systems built to operate, scale,
              and deliver measurable business outcomes.
            </p>

            {/* Social Links */}
            <div className="flex gap-4 mt-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition hover:text-[#00ced1]"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition hover:text-[#00ced1]"
              >
                <FaTwitter />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition hover:text-[#00ced1]"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              className="font-semibold mb-4"
              style={{ color: "var(--text-primary)" }}
            >
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/" className="hover:text-accent transition">
                  Home
                </a>
              </li>
              <li>
                <a href="/services" className="hover:text-accent transition">
                  Services
                </a>
              </li>
              <li>
                <a href="/media" className="hover:text-accent transition">
                  Media
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-accent transition">
                  About
                </a>
              </li>
              <li>
                <a href="/careers" className="hover:text-accent transition">
                  Careers
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-accent transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4
              className="font-semibold mb-4"
              style={{ color: "var(--text-primary)" }}
            >
              Legal
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="/privacy-policy"
                  className="hover:text-accent transition"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="/terms-of-service"
                  className="hover:text-accent transition"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="/cookie-policy"
                  className="hover:text-accent transition"
                >
                  Cookie Policy
                </a>
              </li>
              <li>
                <a href="/faq" className="hover:text-accent transition">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="font-semibold mb-4"
              style={{ color: "var(--text-primary)" }}
            >
              Contact
            </h4>
            <ul className="space-y-2 text-sm">
              <li>support@syvairo.com</li>
              <li>965-51573726</li>
              <Link to="/ConsultationForm">
                <li style={{ color: "var(--accent)" }}>Book Strategy Call</li>
              </Link>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 flex flex-col md:flex-row items-center justify-between text-xs gap-4">
          <p>© 2025 Syvairo. All Rights Reserved.</p>
          <p>
            Developed by
            <span style={{ color: "var(--accent)" }}>SYVAIRO</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
