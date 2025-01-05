import React from 'react';
import { ArrowUp } from 'lucide-react';
import { useScrollToTop } from '../../hooks/useScrollToTop';

const BackToTop = () => {
  const { isVisible, scrollToTop } = useScrollToTop();

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="back-to-top w-12 h-12 flex items-center justify-center 
                 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300"
      aria-label="Back to top"
    >
      <ArrowUp size={20} />
    </button>
  );
};

export default BackToTop;
