import { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function RowCarousel({ 
  title, 
  viewAllLink, 
  children, 
  className = "",
  showArrows = true 
}) {
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const scrollRef = useRef(null);

  // Check scroll position to show/hide arrows
  const handleScroll = () => {
    const container = scrollRef.current;
    if (!container) return;

    const { scrollLeft, scrollWidth, clientWidth } = container;
    setShowLeftArrow(scrollLeft > 0);
    setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 1);
  };

  // Smooth scroll function
  const scroll = (direction) => {
    const container = scrollRef.current;
    if (!container) return;

    const cardWidth = container.children[0]?.offsetWidth || 300;
    const gap = 16; // 1rem gap between cards
    const scrollAmount = cardWidth + gap;

    container.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth'
    });
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.target.closest('[data-carousel]')) {
        if (e.key === 'ArrowLeft') {
          e.preventDefault();
          scroll('left');
        } else if (e.key === 'ArrowRight') {
          e.preventDefault();
          scroll('right');
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className={`relative group ${className}`}>
      {/* Section Header */}
      {title && (
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-white">{title}</h2>
          {viewAllLink && (
            <a
              href={viewAllLink}
              className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
            >
              View All
            </a>
          )}
        </div>
      )}

      {/* Carousel Container */}
      <div className="relative" data-carousel>
        {/* Left Arrow */}
        {showArrows && showLeftArrow && (
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/80 hover:bg-black/90 
                     text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-200
                     backdrop-blur-sm border border-gray-700/50 hover:border-gray-600/50"
            aria-label="Scroll left"
          >
            <ChevronLeft size={20} />
          </button>
        )}

        {/* Right Arrow */}
        {showArrows && showRightArrow && (
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/80 hover:bg-black/90 
                     text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-200
                     backdrop-blur-sm border border-gray-700/50 hover:border-gray-600/50"
            aria-label="Scroll right"
          >
            <ChevronRight size={20} />
          </button>
        )}

        {/* Scrollable Content */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex gap-3 sm:gap-4 overflow-x-auto overflow-y-hidden scrollbar-hide snap-x snap-mandatory
                   pb-4 -mb-4 px-1" // padding-bottom for focus rings, negative margin to hide, small horizontal padding
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {children}
        </div>
      </div>

      {/* Custom CSS for hiding scrollbars */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}