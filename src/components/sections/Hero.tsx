import { motion } from 'framer-motion';
import { ArrowRight, Download, Mail, MapPin, Linkedin } from 'lucide-react';
import { personal } from '@/data/portfolio';
import { fadeInUp, staggerContainer } from '@/lib/animations';

export default function Hero() {
  const scrollTo = (href: string) => {
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
  };

  return (
    <section id="home" className="relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28">
      <div className="absolute inset-0 grid-bg" aria-hidden />
      <div className="absolute -top-32 left-1/4 h-96 w-96 glow blur-3xl" aria-hidden />
      <div className="absolute top-1/3 right-1/4 h-80 w-80 glow blur-3xl" aria-hidden />

      <div className="section-container relative">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="mx-auto max-w-3xl text-center"
        >
          <motion.span
            variants={fadeInUp}
            className="inline-flex items-center gap-2 rounded-full border border-accent-500/30 bg-accent-500/10 px-4 py-1.5 text-xs font-semibold text-accent-700 dark:text-accent-300"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-500 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-600 dark:bg-accent-400" />
            </span>
            Available for new opportunities
          </motion.span>

          <motion.h1
            variants={fadeInUp}
            className="mt-6 font-display text-4xl font-bold tracking-tight text-navy-900 dark:text-white sm:text-5xl lg:text-6xl text-balance"
          >
            Hello, I&rsquo;m{' '}
            <span className="bg-gradient-to-r from-accent-600 to-accent-400 bg-clip-text text-transparent">
              Niharika Javvaji
            </span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="mt-4 text-lg font-semibold text-navy-800 dark:text-navy-200"
          >
            {personal.shortTitle}
          </motion.p>

          <motion.p
            variants={fadeInUp}
            className="mt-5 text-base leading-relaxed text-navy-600 dark:text-navy-300 sm:text-lg"
          >
            I&rsquo;m a Software Engineer with over 3.8 years of experience building scalable
            Machine Learning, Deep Learning, Generative AI, and Agentic AI solutions.
          </motion.p>

          <motion.p
            variants={fadeInUp}
            className="mt-3 text-base leading-relaxed text-navy-600 dark:text-navy-300 sm:text-lg"
          >
            I enjoy transforming complex data and business requirements into intelligent, reliable,
            and production-ready applications.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <button onClick={() => scrollTo('#projects')} className="btn-primary w-full sm:w-auto">
              View My Work
              <ArrowRight className="h-4 w-4" />
            </button>
            <a
              href={personal.resumeUrl}
              download="Niharika_Javvaji_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary w-full sm:w-auto"
            >
              <Download className="h-4 w-4" />
              Download Resume
            </a>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-navy-500 dark:text-navy-400"
          >
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="h-4 w-4" />
              {personal.location}
            </span>
            <a
              href={`mailto:${personal.email}`}
              className="inline-flex items-center gap-1.5 transition-colors hover:text-accent-600 dark:hover:text-accent-400"
            >
              <Mail className="h-4 w-4" />
              {personal.email}
            </a>
            <div className="flex items-center gap-3">
              <a
                href={personal.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="transition-colors hover:text-accent-600 dark:hover:text-accent-400"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
