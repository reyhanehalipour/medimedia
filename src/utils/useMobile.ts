import { useSyncExternalStore } from 'react';

const MOBILE_MAX_WIDTH = 1200;

let isMobileValue: boolean | null = null;
const listeners = new Set<() => void>();

const checkIsMobile = (): boolean => {
  // const userAgent = typeof window !== 'undefined' ? navigator.userAgent : '';
  const isWidthMobile = window.innerWidth < MOBILE_MAX_WIDTH;
  // const isMobileUserAgent =
  //   /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);

  // return isWidthMobile && isMobileUserAgent;
  return isWidthMobile;
};

const updateIsMobile = (): void => {
  const newValue = checkIsMobile();
  if (newValue !== isMobileValue) {
    isMobileValue = newValue;
    listeners.forEach((listener) => listener());
  }
};

if (typeof window !== 'undefined') {
  isMobileValue = checkIsMobile();
  window.addEventListener('resize', updateIsMobile);
}

const useMobile = (): boolean => {
  return useSyncExternalStore(
    (listener) => {
      listeners.add(listener);
      return () => listeners.delete(listener);
    },
    () => isMobileValue as boolean
  );
};

export default useMobile;
