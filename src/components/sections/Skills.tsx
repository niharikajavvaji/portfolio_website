import { motion } from 'framer-motion';
import SectionHeading from '@/components/SectionHeading';
import { skillCategories } from '@/data/portfolio';
import { fadeInUp, scaleIn, staggerContainer } from '@/lib/animations';

export default function Skills() {
  return (
    <section id="skills" className="section-pad bg-navy-50/50 dark:bg-navy-900/20">
      <div className="section-container">
        <SectionHeading
          eyebrow="Skills"
          title="Technical toolkit"
          description="Technologies and tools I use across the machine learning and AI development lifecycle."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              className="card card-hover p-6 sm:p-7"
            >
              <motion.div variants={fadeInUp} className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-600/10 text-accent-600 dark:bg-accent-400/10 dark:text-accent-400">
                  <category.icon className="h-5 w-5" />
                </span>
                <h3 className="font-display text-lg font-bold text-navy-900 dark:text-white">
                  {category.title}
                </h3>
              </motion.div>

              <motion.div variants={fadeInUp} className="mt-5 flex flex-wrap gap-2.5">
                {category.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    variants={scaleIn}
                    className="tag transition-colors hover:border-accent-500 hover:bg-accent-50 hover:text-accent-700 dark:hover:border-accent-500/60 dark:hover:bg-accent-500/10 dark:hover:text-accent-300"
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
