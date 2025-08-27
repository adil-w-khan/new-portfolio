import { useEffect } from 'react';
import { MapPin, Calendar, ExternalLink, Github, Award, X } from 'lucide-react';

export default function ExperienceModal({ experience, onClose }) {
  // Prevent body scroll when modal is open
  useEffect(() => {
    if (experience) {
      // Store original overflow value
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      
      return () => {
        // Always restore to original value or remove the style
        if (originalOverflow) {
          document.body.style.overflow = originalOverflow;
        } else {
          document.body.style.removeProperty('overflow');
        }
      };
    }
  }, [experience]);

  // Close on escape key
  useEffect(() => {
    if (!experience) return;
    
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [onClose, experience]);

  if (!experience) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal Container - Full height on mobile, centered on desktop */}
      <div className="relative bg-neutral-900 border border-gray-700 rounded-lg shadow-2xl
                    w-full h-full max-h-full
                    sm:w-[90vw] sm:h-[90vh] sm:max-w-4xl
                    md:w-[80vw] md:h-[85vh]
                    lg:w-[70vw] lg:max-h-[90vh]
                    flex flex-col">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-black/70 
                   text-white rounded-full transition-colors duration-200"
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto overscroll-contain p-4 sm:p-6 lg:p-8">
          <div className="max-w-none">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-6 mb-6 sm:mb-8">
              {experience.logo && (
                <div className="w-16 h-16 rounded-lg overflow-hidden bg-gray-800 flex-shrink-0 mx-auto sm:mx-0">
                  <img
                    src={experience.logo}
                    alt={`${experience.company} logo`}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              <div className="flex-1 text-center sm:text-left">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2 pr-8">{experience.role}</h2>
                <h3 className="text-lg sm:text-xl text-gray-300 mb-3">{experience.company}</h3>
                <div className="flex flex-col sm:flex-row sm:flex-wrap gap-2 sm:gap-4 text-sm text-gray-400">
                  <span className="flex items-center justify-center sm:justify-start gap-1">
                    <Calendar size={16} />
                    {experience.dates}
                  </span>
                  <span className="flex items-center justify-center sm:justify-start gap-1">
                    <MapPin size={16} />
                    {experience.location}
                  </span>
                  {experience.type && (
                    <span className="px-2 py-1 bg-gray-800 rounded-full text-xs mx-auto sm:mx-0 w-fit">
                      {experience.type}
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Description */}
            {experience.details && (
              <div className="mb-6 sm:mb-8">
                <h4 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4">About the Role</h4>
                <p className="text-gray-300 leading-relaxed text-sm sm:text-base">{experience.details}</p>
              </div>
            )}

            {/* Key Contributions */}
            {experience.bullets && experience.bullets.length > 0 && (
              <div className="mb-6 sm:mb-8">
                <h4 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4">Key Contributions</h4>
                <ul className="space-y-3">
                  {experience.bullets.map((bullet, index) => (
                    <li key={index} className="flex items-start gap-3 text-gray-300 text-sm sm:text-base">
                      <Award size={16} className="text-red-600 mt-1 flex-shrink-0" />
                      <span className="leading-relaxed">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Tech Stack */}
            {experience.techStack && experience.techStack.length > 0 && (
              <div className="mb-6 sm:mb-8">
                <h4 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4">Technologies Used</h4>
                <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
                  {experience.techStack.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm border border-gray-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Links */}
            {experience.links && (
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pb-4">
                {experience.links.website && (
                  <a
                    href={experience.links.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 
                             text-white rounded-lg transition-colors duration-200 text-sm sm:text-base"
                  >
                    <ExternalLink size={16} />
                    Company Website
                  </a>
                )}
                {experience.links.github && (
                  <a
                    href={experience.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 
                             text-white rounded-lg transition-colors duration-200 border border-gray-700 text-sm sm:text-base"
                  >
                    <Github size={16} />
                    View Code
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}