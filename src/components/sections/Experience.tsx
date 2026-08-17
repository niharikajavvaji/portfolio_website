import { motion } from 'framer-motion';
import { Briefcase, MapPin, Building2, FolderKanban } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import { experience } from '@/data/portfolio';
import { fadeInUp, staggerContainer } from '@/lib/animations';

export default function Experience() {
  return (
    <section id="experience" className="section-pad bg-navy-50/50 dark:bg-navy-900/20">
      <div className="section-container">
        <SectionHeading
          eyebrow="Experience"
          title="Professional experience"
          description="Building and shipping AI solutions in production environments."
        />

        <div className="mx-auto mt-14 max-w-4xl">
          {experience.map((job, idx) => (
            <motion.div
              key={idx}
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              className="relative pl-10 sm:pl-14"
            >
              <div
                className="absolute left-3 top-2 h-full w-px bg-navy-200 dark:bg-navy-700 sm:left-4"
                aria-hidden
              />
              <motion.span
                variants={fadeInUp}
                className="absolute left-0 top-1.5 flex h-7 w-7 items-center justify-center rounded-full bg-accent-600 text-white shadow-lg shadow-accent-600/30 sm:left-1"
              >
                <Briefcase className="h-3.5 w-3.5" />
              </motion.span>

              <motion.div variants={fadeInUp} className="card card-hover p-6 sm:p-8">
                <div className="flex flex-col gap-1">
                  <h3 className="font-display text-xl font-bold text-navy-900 dark:text-white">
                    {job.role}
                  </h3>
                  <p className="text-base font-semibold text-accent-600 dark:text-accent-400">
                    {job.company}
                  </p>
                </div>

                <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm text-navy-500 dark:text-navy-400">
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin className="h-4 w-4" />
                    {job.location}
                  </span>
                  <span className="inline-flex items-center gap-1.5 font-medium text-navy-600 dark:text-navy-300">
                    {job.duration}
                  </span>
                </div>

                {job.client && (
                  <div className="mt-4 inline-flex items-center gap-2 rounded-lg bg-navy-50 px-3.5 py-2 text-sm dark:bg-navy-800/50">
                    <Building2 className="h-4 w-4 shrink-0 text-navy-400" />
                    <span className="text-navy-600 dark:text-navy-300">
                      Client: <span className="font-medium">{job.client}</span>
                    </span>
                  </div>
                )}

                <div className="mt-6 space-y-8">
                  {job.projects.map((proj, pIdx) => (
                    <div
                      key={pIdx}
                      className={
                        pIdx > 0
                          ? 'border-t border-navy-200/70 pt-6 dark:border-navy-700/60'
                          : ''
                      }
                    >
                      <div className="flex items-center gap-2">
                        <FolderKanban className="h-4 w-4 shrink-0 text-accent-600 dark:text-accent-400" />
                        <h4 className="font-display text-base font-bold text-navy-900 dark:text-white">
                          {proj.title}
                        </h4>
                      </div>

                      <ul className="mt-3 space-y-3">
                        {proj.points.map((point, i) => (
                          <li
                            key={i}
                            className="flex gap-3 text-sm leading-relaxed text-navy-700 dark:text-navy-300 sm:text-base"
                          >
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-500" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
