import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/lib/animations';

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  center?: boolean;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  center = true,
}: SectionHeadingProps) {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      className={center ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}
    >
      <motion.p variants={fadeInUp} className="section-eyebrow">
        {eyebrow}
      </motion.p>
      <motion.h2 variants={fadeInUp} className="section-title text-balance">
        {title}
      </motion.h2>
      {description && (
        <motion.p
          variants={fadeInUp}
          className="mt-4 text-base leading-relaxed text-navy-600 dark:text-navy-300"
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  );
}
