import { useEffect } from 'react';

let lockCount = 0;
const CLASS_NAME = 'scroll-lock';

const applyScrollLock = (shouldLock) => {
  if (typeof document === 'undefined') return;

  const html = document.documentElement;
  const body = document.body;
  const targets = [html, body].filter(Boolean);

  targets.forEach((el) => {
    if (!el.classList) return;
    if (shouldLock) {
      el.classList.add(CLASS_NAME);
    } else {
      el.classList.remove(CLASS_NAME);
    }
  });
};

export const enableScrollLock = () => {
  if (lockCount === 0) {
    applyScrollLock(true);
  }
  lockCount += 1;
};

export const disableScrollLock = () => {
  if (lockCount === 0) return;
  lockCount -= 1;
  if (lockCount === 0) {
    applyScrollLock(false);
  }
};

export const useScrollLock = (active) => {
  useEffect(() => {
    if (!active) return;

    enableScrollLock();
    return () => {
      disableScrollLock();
    };
  }, [active]);
};

