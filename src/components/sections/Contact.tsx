import { motion } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
} from 'lucide-react';
import {
  contactHeading,
  contactDescription,
  personal,
} from '@/data/portfolio';
import { fadeInUp, staggerContainer } from '@/lib/animations';

export default function Contact() {
  const contactItems = [
    {
      icon: Mail,
      label: 'Email',
      value: personal.email,
      href: `mailto:${personal.email}`,
    },
    {
      icon: Phone,
      label: 'Phone',
      value: personal.phone,
      href: `tel:${personal.phone.replace(/\s+/g, '')}`,
    },
    {
      icon: MapPin,
      label: 'Location',
      value: personal.location,
      href: null,
    },
  ];

  return (
    <section id="contact" className="section-pad">
      <div className="section-container">
        <div className="max-w-xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="w-full"
          >
            <motion.div variants={fadeInUp} className="card p-8 sm:p-10 text-center">
              <span className="text-xs font-semibold uppercase tracking-wider text-accent-600 dark:text-accent-400">
                Contact
              </span>
              <h2 className="mt-2 font-display text-2xl font-bold text-navy-900 dark:text-white sm:text-3xl">
                {contactHeading}
              </h2>
              <p className="mt-3 text-sm text-navy-600 dark:text-navy-300 leading-relaxed">
                {contactDescription}
              </p>

              <ul className="mt-8 space-y-4 text-left max-w-md mx-auto">
                {contactItems.map((item) => {
                  const inner = (
                    <>
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent-600/10 text-accent-600 dark:bg-accent-400/10 dark:text-accent-400">
                        <item.icon className="h-5 w-5" />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-xs font-medium uppercase tracking-wider text-navy-400 dark:text-navy-500">
                          {item.label}
                        </span>
                        <span className="block truncate text-sm font-semibold text-navy-800 dark:text-navy-100">
                          {item.value}
                        </span>
                      </span>
                    </>
                  );
                  return (
                    <li key={item.label}>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="flex items-center gap-4 rounded-xl p-3 transition-colors hover:bg-navy-50 dark:hover:bg-navy-800/50"
                        >
                          {inner}
                        </a>
                      ) : (
                        <div className="flex items-center gap-4 p-3">{inner}</div>
                      )}
                    </li>
                  );
                })}
              </ul>

              <div className="mt-8 flex justify-center border-t border-navy-200/70 pt-6 dark:border-navy-700/60">
                <a
                  href={personal.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="flex h-12 w-12 items-center justify-center rounded-xl border border-navy-200 text-navy-600 transition-colors hover:border-accent-500 hover:text-accent-600 dark:border-navy-700 dark:text-navy-300 dark:hover:border-accent-500/60 dark:hover:text-accent-400"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
