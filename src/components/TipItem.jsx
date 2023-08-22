import { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';
import Icon from './Icon';

function TipItem({ icon, title, children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const control = useAnimation();

  useEffect(() => {
    if (isInView) control.start('visible');
  }, [isInView, control]);

  return (
    <li className="flex flex-col gap-8 sm:flex-row lg:flex-col lg:items-start lg:gap-11 sm:gap-10 sm:items-center">
      <motion.div
        ref={ref}
        variants={{ hidden: { opacity: 0, scale: 0 }, visible: { opacity: 1, scale: 1 } }}
        initial="hidden"
        animate={control}
        transition={{ duration: 0.3, delay: 0.2, ease: 'easeOut' }}
        className="w-16 h-16 shrink-0"
        rounded={true}
        name={icon}>
        <Icon className="w-full h-full " rounded={true} name={icon} />
      </motion.div>
      <div className="text-flow">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="max-w-prose">{children}</p>
      </div>
    </li>
  );
}

export default TipItem;
