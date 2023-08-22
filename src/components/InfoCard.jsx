import { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import Icon from './Icon';

function InfoCard({ icon, title, children, className = '' }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const control = useAnimation();

  useEffect(() => {
    if (isInView) control.start('visible');
  });

  return (
    <motion.li
      variants={{
        hidden: { opacity: 0, x: 75 },
        visible: { opacity: 1, x: 0 },
      }}
      initial="hidden"
      animate={control}
      transition={{ duration: 0.5, delay: 0.25 }}
      ref={ref}
      className={`p-6 sm:p-8 rounded-2xl shadow bg-white shadow-primary-100/25 flex flex-col gap-4 ${className}`}>
      <header className="flex items-center gap-4">
        <Icon name={icon} className="w-8 h-8" />
        <h3 className="text-md font-semibold">{title}</h3>
      </header>
      <p className="text-neutral-400">{children}</p>
    </motion.li>
  );
}

export default InfoCard;
