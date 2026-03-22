import { motion, useReducedMotion } from 'framer-motion';

/** Появление блока при скролле — заметнее движение и дольше удерживается «въезд». */
const ease = [0.22, 1, 0.36, 1];

export default function SectionReveal({ children, className = '', delay = 0 }) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.22, margin: '0px 0px -6% 0px' }}
      transition={{ duration: 1.05, ease, delay }}
    >
      {children}
    </motion.div>
  );
}
