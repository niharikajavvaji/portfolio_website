import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X, Moon, Sun, Sparkles } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';
import { navLinks, personal } from '@/data/portfolio';

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('#home');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 16);

      const sections = navLinks
        .map((l) => document.querySelector(l.href))
        .filter((el): el is HTMLElement => el instanceof HTMLElement);
      const scrollPos = window.scrollY + 120;
      for (let i = sections.length - 1; i >= 0; i--) {
        if (scrollPos >= sections[i].offsetTop) {
          setActive(navLinks[i].href);
          break;
        }
      }
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (href: string) => {
    setOpen(false);
    setTimeout(() => {
      if (href === '#home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }
      const el = document.querySelector(href) as HTMLElement | null;
      if (el) {
        const headerOffset = 64;
        const targetTop = Math.max(0, el.getBoundingClientRect().top + window.pageYOffset - headerOffset);
        try {
          window.scrollTo({ top: targetTop, behavior: 'smooth' });
        } catch {
          window.scrollTo(0, targetTop);
        }
      }
    }, 50);
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-navy-200/70 bg-white/80 backdrop-blur-xl dark:border-navy-800/60 dark:bg-navy-950/80'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <nav className="section-container flex h-16 items-center justify-between">
        <button
          onClick={() => handleNav('#home')}
          className="group flex items-center gap-2"
          aria-label="Go to home"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent-600 text-white shadow-lg shadow-accent-600/20 transition-transform group-hover:scale-105">
            <Sparkles className="h-5 w-5" />
          </span>
          <span className="font-display text-base font-bold tracking-tight text-navy-900 dark:text-white">
            Niharika<span className="text-accent-600 dark:text-accent-400">.</span>J
          </span>
        </button>

        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => handleNav(link.href)}
                className={`relative rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                  active === link.href
                    ? 'text-accent-600 dark:text-accent-400'
                    : 'text-navy-600 hover:text-navy-900 dark:text-navy-300 dark:hover:text-white'
                }`}
              >
                {link.label}
                {active === link.href && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-x-2 -bottom-px h-0.5 rounded-full bg-accent-600 dark:bg-accent-400"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <button
            onClick={toggleTheme}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-navy-200 text-navy-700 transition-colors hover:border-accent-500 hover:text-accent-600 dark:border-navy-700 dark:text-navy-200 dark:hover:border-accent-500/60 dark:hover:text-accent-400"
            aria-label="Toggle dark mode"
          >
            <AnimatePresence mode="wait" initial={false}>
              {theme === 'dark' ? (
                <motion.span
                  key="sun"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Sun className="h-5 w-5" />
                </motion.span>
              ) : (
                <motion.span
                  key="moon"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Moon className="h-5 w-5" />
                </motion.span>
              )}
            </AnimatePresence>
          </button>

          <button
            onClick={() => handleNav('#contact')}
            className="hidden btn-primary !px-5 !py-2.5 sm:inline-flex"
          >
            Contact Me
          </button>

          <button
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-navy-200 text-navy-700 dark:border-navy-700 dark:text-navy-200 lg:hidden"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-navy-200/70 bg-white/95 backdrop-blur-xl dark:border-navy-800/60 dark:bg-navy-950/95 lg:hidden"
          >
            <ul className="section-container flex flex-col gap-1 py-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNav(link.href)}
                    className={`w-full rounded-lg px-4 py-3 text-left text-sm font-medium transition-colors ${
                      active === link.href
                        ? 'bg-accent-50 text-accent-700 dark:bg-accent-500/10 dark:text-accent-300'
                        : 'text-navy-700 hover:bg-navy-50 dark:text-navy-200 dark:hover:bg-navy-800/60'
                    }`}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
              <li className="px-1 pt-2">
                <button onClick={() => handleNav('#contact')} className="btn-primary w-full">
                  Contact Me
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
