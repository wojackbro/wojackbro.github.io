'use client';

import { useEffect, useState } from 'react';

/** True only after client mount — keeps SSR + first paint identical to avoid hydration mismatches with useInView / motion. */
export function useHasMounted() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  return mounted;
}
