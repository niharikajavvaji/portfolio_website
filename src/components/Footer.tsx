import { Mail, Phone, MapPin, ArrowUp } from 'lucide-react';
import { personal, navLinks } from '@/data/portfolio';

export default function Footer() {
  const handleNav = (href: string) =>
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <footer className="border-t border-navy-200/70 bg-navy-50/50 dark:border-navy-800/60 dark:bg-navy-950">
      <div className="section-container py-14">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-navy-500 dark:text-navy-400">
              Navigation
            </h4>
            <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNav(link.href)}
                    className="text-sm text-navy-600 transition-colors hover:text-accent-600 dark:text-navy-400 dark:hover:text-accent-400"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-navy-500 dark:text-navy-400">
              Contact
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <a
                  href={`mailto:${personal.email}`}
                  className="inline-flex items-center gap-2 text-navy-600 transition-colors hover:text-accent-600 dark:text-navy-400 dark:hover:text-accent-400"
                >
                  <Mail className="h-4 w-4" />
                  {personal.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${personal.phone.replace(/\s+/g, '')}`}
                  className="inline-flex items-center gap-2 text-navy-600 transition-colors hover:text-accent-600 dark:text-navy-400 dark:hover:text-accent-400"
                >
                  <Phone className="h-4 w-4" />
                  {personal.phone}
                </a>
              </li>
              <li className="inline-flex items-center gap-2 text-navy-600 dark:text-navy-400">
                <MapPin className="h-4 w-4" />
                {personal.location}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex justify-center border-t border-navy-200/70 pt-6 dark:border-navy-800/60">
          <button
            onClick={() => handleNav('#home')}
            className="inline-flex items-center gap-1.5 rounded-lg border border-navy-200 px-3 py-2 text-xs font-medium text-navy-600 transition-colors hover:border-accent-500 hover:text-accent-600 dark:border-navy-700 dark:text-navy-300 dark:hover:border-accent-500/60 dark:hover:text-accent-400"
          >
            <ArrowUp className="h-3.5 w-3.5" />
            Back to Top
          </button>
        </div>
      </div>
    </footer>
  );
}
