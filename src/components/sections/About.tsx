import { motion } from 'framer-motion';
import { BrainCircuit, Target, Sparkles, FileText } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import { aboutParagraphs, stats } from '@/data/portfolio';
import { fadeInUp, scaleIn, staggerContainer } from '@/lib/animations';

const highlights = [
  { icon: BrainCircuit, label: 'ML and Deep Learning' },
  { icon: Sparkles, label: 'Generative and Agentic AI' },
  { icon: Target, label: 'Production-Ready Systems' },
  { icon: FileText, label: 'RAG and Document Intelligence' },
];

export default function About() {
  return (
    <section id="about" className="section-pad">
      <div className="section-container">
        <SectionHeading
          eyebrow="About Me"
          title="Turning complex data into intelligent systems"
        />

        <div className="mt-14 grid gap-12 lg:grid-cols-5">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="lg:col-span-3"
          >
            {aboutParagraphs.map((para, i) => (
              <motion.p
                key={i}
                variants={fadeInUp}
                className="text-base leading-relaxed text-navy-700 dark:text-navy-300 sm:text-lg [&:not(:first-child)]:mt-5"
              >
                {para}
              </motion.p>
            ))}

            <motion.div variants={fadeInUp} className="mt-8 flex flex-wrap gap-3">
              {highlights.map((h) => (
                <span
                  key={h.label}
                  className="inline-flex items-center gap-2 rounded-full border border-navy-200 bg-navy-50 px-4 py-2 text-sm font-medium text-navy-700 dark:border-navy-700 dark:bg-navy-800/50 dark:text-navy-200"
                >
                  <h.icon className="h-4 w-4 text-accent-600 dark:text-accent-400" />
                  {h.label}
                </span>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="lg:col-span-2"
          >
            <motion.div
              variants={fadeInUp}
              className="card relative overflow-hidden p-8"
            >
              <div className="absolute -right-12 -top-12 h-40 w-40 glow blur-2xl" aria-hidden />
              <h3 className="font-display text-lg font-bold text-navy-900 dark:text-white">
                At a glance
              </h3>
              <p className="mt-2 text-sm text-navy-600 dark:text-navy-400">
                Focused, measured, and outcome-driven AI engineering.
              </p>

              <dl className="mt-6 grid grid-cols-2 gap-4">
                {stats.map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    variants={scaleIn}
                    className="rounded-xl border border-navy-200/70 bg-navy-50/50 p-4 dark:border-navy-700/60 dark:bg-navy-800/40"
                  >
                    <dt className="text-xs font-medium text-navy-500 dark:text-navy-400">
                      {stat.label}
                    </dt>
                    <dd className="mt-1 font-display text-xl font-bold text-accent-600 dark:text-accent-400">
                      {stat.value}
                    </dd>
                  </motion.div>
                ))}
              </dl>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
