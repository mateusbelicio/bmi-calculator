import { useRef, useEffect } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

function Reveal({ children, className }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start('visible');
    }
  }, [isInView, mainControls]);

  return (
    <motion.section
      ref={ref}
      className={className}
      variants={{
        hidden: { opacity: 0, y: 75 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate={mainControls}
      transition={{ duration: 0.5 }}>
      {children}
    </motion.section>
  );
}

export default Reveal;
