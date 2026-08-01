import { motion } from 'framer-motion';
import { GraduationCap, Calendar } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import { education } from '@/data/portfolio';
import { fadeInUp, staggerContainer } from '@/lib/animations';

export default function Education() {
  return (
    <section id="education" className="section-pad">
      <div className="section-container">
        <SectionHeading
          eyebrow="Education"
          title="Academic background"
          description="Foundations in computer science and engineering that support my work in AI and software."
        />

        <div className="mx-auto mt-14 max-w-3xl">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="relative"
          >
            <div
              className="absolute left-4 top-2 h-full w-px bg-navy-200 dark:bg-navy-700 sm:left-5"
              aria-hidden
            />

            {education.map((item, i) => (
              <motion.div key={i} variants={fadeInUp} className="relative mb-8 pl-12 last:mb-0 sm:pl-16">
                <span className="absolute left-0 top-1 flex h-9 w-9 items-center justify-center rounded-full bg-accent-600 text-white shadow-lg shadow-accent-600/30 sm:left-1">
                  <GraduationCap className="h-4 w-4" />
                </span>

                <div className="card card-hover p-5 sm:p-6">
                  <h3 className="font-display text-base font-bold leading-snug text-navy-900 dark:text-white sm:text-lg">
                    {item.degree}
                  </h3>
                  <p className="mt-1 text-sm font-semibold text-accent-600 dark:text-accent-400">
                    {item.institution}
                  </p>
                  <p className="mt-3 inline-flex items-center gap-1.5 text-sm text-navy-500 dark:text-navy-400">
                    <Calendar className="h-4 w-4" />
                    {item.duration}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
