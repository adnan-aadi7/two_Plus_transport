import React from 'react';
import { motion, useReducedMotion, type Variants } from 'framer-motion';

type Direction = 'up' | 'down' | 'left' | 'right' | 'none';

const OFFSET: Record<Direction, { x: number; y: number }> = {
  up: { x: 0, y: 28 },
  down: { x: 0, y: -28 },
  left: { x: 34, y: 0 },
  right: { x: -34, y: 0 },
  none: { x: 0, y: 0 },
};

interface FadeInProps {
  children: React.ReactNode;
  className?: string;
  /** Seconds to wait before the animation starts once scrolled into view. */
  delay?: number;
  duration?: number;
  direction?: Direction;
  /** Fraction of the element that must be visible before animating. */
  amount?: number;
}

/** Fades and slides a block into view the first time it is scrolled to. */
export const FadeIn: React.FC<FadeInProps> = ({
  children,
  className = '',
  delay = 0,
  duration = 0.7,
  direction = 'up',
  amount = 0.3,
}) => {
  const reduced = useReducedMotion();
  const offset = OFFSET[direction];

  if (reduced) return <div className={className}>{children}</div>;

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
};

interface TextRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  amount?: number;
  /** Split into words and stagger each one in. */
  byWord?: boolean;
}

/**
 * Animates a heading or paragraph into view. Words stagger individually when
 * `byWord` is set, otherwise the whole block moves as one unit.
 */
export const TextReveal: React.FC<TextRevealProps> = ({
  children,
  className = '',
  delay = 0,
  duration = 0.8,
  amount = 0.4,
  byWord = false,
}) => {
  const reduced = useReducedMotion();

  if (reduced) return <span className={className}>{children}</span>;

  const target = { opacity: 1, y: 0, filter: 'blur(0px)' };
  const hidden = { opacity: 0, y: 22, filter: 'blur(6px)' };
  const ease = [0.22, 1, 0.36, 1] as const;

  if (!byWord) {
    return (
      <motion.span
        className={`inline-block ${className}`}
        initial={hidden}
        whileInView={target}
        viewport={{ once: true, amount }}
        transition={{ duration, delay, ease }}
      >
        {children}
      </motion.span>
    );
  }

  const words = String(children).split(' ');

  return (
    <motion.span
      className={`inline-block ${className}`}
      initial="hidden"
      whileInView="shown"
      viewport={{ once: true, amount }}
      variants={{
        hidden: {},
        shown: { transition: { staggerChildren: 0.055, delayChildren: delay } },
      }}
      aria-label={String(children)}
    >
      {words.map((word, index) => (
        <span key={`${word}-${index}`} className="inline-block overflow-hidden align-bottom">
          <motion.span
            className="inline-block will-change-transform"
            variants={{ hidden, shown: target }}
            transition={{ duration, ease }}
          >
            {word}
            {index < words.length - 1 ? '\u00A0' : ''}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
};

interface StaggerTextProps {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
  delay?: number;
  amount?: number;
  as?: 'div' | 'ul' | 'section';
}

/** Reveals direct children one after another as the group scrolls into view. */
export const StaggerText: React.FC<StaggerTextProps> = ({
  children,
  className = '',
  stagger = 0.09,
  delay = 0,
  amount = 0.25,
  as = 'div',
}) => {
  const reduced = useReducedMotion();
  const MotionTag = motion[as];

  const variants: Variants = {
    hidden: {},
    shown: { transition: { staggerChildren: stagger, delayChildren: delay } },
  };

  if (reduced) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <MotionTag
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="shown"
      viewport={{ once: true, amount }}
    >
      {children}
    </MotionTag>
  );
};

export const staggerItemVariants: Variants = {
  hidden: { opacity: 0, y: 26 },
  shown: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

/** Drop-in child for StaggerText so each item animates in sequence. */
export const StaggerItem: React.FC<{
  children: React.ReactNode;
  className?: string;
  as?: 'div' | 'li' | 'article';
}> = ({ children, className = '', as = 'div' }) => {
  const MotionTag = motion[as];
  return (
    <MotionTag className={className} variants={staggerItemVariants}>
      {children}
    </MotionTag>
  );
};