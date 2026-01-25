import { useState, useCallback } from 'react';

/**
 * Custom hook for carousel and gallery navigation logic.
 * @param {Array} items - The list of items to navigate through.
 */
const useCarousel = (items = []) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = useCallback(() => {
    if (items.length <= 1) return;
    setCurrentIndex((prev) => (prev + 1) % items.length);
  }, [items.length]);

  const prev = useCallback(() => {
    if (items.length <= 1) return;
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  }, [items.length]);

  const goTo = useCallback((index) => {
    if (index >= 0 && index < items.length) {
      setCurrentIndex(index);
    }
  }, [items.length]);

  return {
    currentIndex,
    currentItem: items[currentIndex],
    next,
    prev,
    goTo,
    reset: () => setCurrentIndex(0)
  };
};

export default useCarousel;
