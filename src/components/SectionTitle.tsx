import { motion } from 'framer-motion';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  invert?: boolean;
}

export default function SectionTitle({ title, subtitle, align = 'left', invert = false }: SectionTitleProps) {
  return (
    <div className={`mb-16 ${align === 'center' ? 'text-center' : 'text-left'}`}>
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className={`text-4xl md:text-6xl font-black mb-6 tracking-tighter uppercase italic ${invert ? 'text-white' : 'text-slate-900'}`}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className={`max-w-3xl text-xl font-medium leading-relaxed ${invert ? 'text-white/70' : 'text-slate-500'}`}
        >
          {subtitle}
        </motion.p>
      )}
      <motion.div 
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className={`h-2 w-24 mt-8 rounded-full origin-left ${align === 'center' ? 'mx-auto' : ''} ${invert ? 'bg-white' : 'bg-red-600'}`}
      />
    </div>
  );
}
