import { motion } from 'framer-motion';
import { Award, BadgeCheck } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import { certifications } from '@/data/portfolio';
import { scaleIn, staggerContainer } from '@/lib/animations';

export default function Certifications() {
  return (
    <section id="certifications" className="section-pad bg-navy-50/50 dark:bg-navy-900/20">
      <div className="section-container">
        <SectionHeading
          eyebrow="Certifications"
          title="Certifications and programs"
          description="Formal programs and specializations that strengthen my AI and Machine Learning expertise."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="mt-14 grid gap-6 sm:grid-cols-2"
        >
          {certifications.map((cert) => (
            <motion.article
              key={cert.title}
              variants={scaleIn}
              className="card card-hover group flex flex-col p-6 sm:p-7"
            >
              <div className="flex items-start gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent-600/10 text-accent-600 dark:bg-accent-400/10 dark:text-accent-400">
                  <Award className="h-6 w-6" />
                </span>
                <div className="min-w-0 flex-1">
                  <h3 className="font-display text-base font-bold leading-snug text-navy-900 dark:text-white sm:text-lg">
                    {cert.title}
                  </h3>
                  <div className="mt-2 space-y-0.5 text-sm">
                    <p className="inline-flex items-center gap-1.5 font-medium text-navy-700 dark:text-navy-200">
                      <BadgeCheck className="h-4 w-4 text-accent-600 dark:text-accent-400" />
                      {cert.issuer}
                    </p>
                    <p className="text-navy-500 dark:text-navy-400">{cert.platform}</p>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
