'use client';

import { useEffect, useState } from 'react';

/**
 * True on narrow viewports or when the user prefers reduced motion.
 * Use to skip heavy scroll animations and lighten effects on phones.
 */
export function usePreferLightMotion() {
  const [prefer, setPrefer] = useState(false);

  useEffect(() => {
    const narrow = window.matchMedia('(max-width: 768px)');
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
    const sync = () => setPrefer(narrow.matches || reduce.matches);
    sync();
    narrow.addEventListener('change', sync);
    reduce.addEventListener('change', sync);
    return () => {
      narrow.removeEventListener('change', sync);
      reduce.removeEventListener('change', sync);
    };
  }, []);

  return prefer;
}
