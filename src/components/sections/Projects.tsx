import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import { projects } from '@/data/portfolio';
import { scaleIn } from '@/lib/animations';

export default function Projects() {
  return (
    <section id="projects" className="section-pad">
      <div className="section-container">
        <SectionHeading
          eyebrow="Projects"
          title="Featured projects"
          description="A selection of AI and Machine Learning systems built end to end, from research and modeling to deployment."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <motion.article
              key={project.title}
              variants={scaleIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              className="card card-hover group flex flex-col p-6 sm:p-7"
            >
              <h3 className="font-display text-lg font-bold leading-snug text-navy-900 dark:text-white">
                {project.title}
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-navy-600 dark:text-navy-300">
                {project.description}
              </p>

              <div className="mt-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-navy-400 dark:text-navy-500">
                  Technologies
                </p>
                <div className="mt-2.5 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-navy-400 dark:text-navy-500">
                  Key features
                </p>
                <ul className="mt-2.5 grid gap-2">
                  {project.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 text-sm text-navy-700 dark:text-navy-300"
                    >
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent-500 dark:text-accent-400" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
