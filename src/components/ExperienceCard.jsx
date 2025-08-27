import { Calendar, MapPin } from 'lucide-react';

export default function ExperienceCard({ experience, onSeeMore, featured = false }) {
  return (
    <div className={`group relative flex-shrink-0 snap-start cursor-pointer transition-all duration-300 
                   hover:scale-105 
                   w-64 sm:w-72 md:w-80 lg:${featured ? 'w-80' : 'w-72'}`}>
      <div className="bg-neutral-900 rounded-lg overflow-hidden border border-gray-800 
                    hover:border-gray-700 transition-all duration-300 hover:shadow-xl h-full">
        {/* Company Logo / Header */}
        <div className="p-4 sm:p-6 border-b border-gray-800">
          <div className="flex items-center gap-3 sm:gap-4">
            {experience.logo && (
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg overflow-hidden bg-gray-800 flex-shrink-0">
                <img
                  src={experience.logo}
                  alt={`${experience.company} logo`}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-white text-base sm:text-lg truncate">{experience.role}</h3>
              <p className="text-gray-400 text-sm truncate">{experience.company}</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-6">
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-xs text-gray-500 mb-3 sm:mb-4">
            <span className="flex items-center gap-1">
              <Calendar size={12} />
              {experience.dates}
            </span>
            <span className="flex items-center gap-1">
              <MapPin size={12} />
              {experience.location}
            </span>
          </div>

          {/* Key highlights */}
          {experience.bullets && experience.bullets.length > 0 && (
            <ul className="space-y-2 mb-3 sm:mb-4">
              {experience.bullets.slice(0, 2).map((bullet, index) => (
                <li key={index} className="text-sm text-gray-300 flex items-start gap-2">
                  <span className="w-1 h-1 bg-red-600 rounded-full mt-2 flex-shrink-0"></span>
                  <span className="line-clamp-2 leading-relaxed">{bullet}</span>
                </li>
              ))}
              {experience.bullets.length > 2 && (
                <li className="text-xs text-gray-500">
                  +{experience.bullets.length - 2} more achievements
                </li>
              )}
            </ul>
          )}

          {/* Tech Stack Preview */}
          {experience.techStack && experience.techStack.length > 0 && (
            <div className="flex flex-wrap gap-1 mb-3 sm:mb-4">
              {experience.techStack.slice(0, 3).map((tech, index) => (
                <span
                  key={index}
                  className="px-2 py-1 bg-gray-800 text-gray-400 rounded text-xs"
                >
                  {tech}
                </span>
              ))}
              {experience.techStack.length > 3 && (
                <span className="px-2 py-1 bg-gray-800 text-gray-500 rounded text-xs">
                  +{experience.techStack.length - 3}
                </span>
              )}
            </div>
          )}

          {/* CTA Button - Always visible on mobile, hover reveal on desktop */}
          <button
            onClick={onSeeMore}
            className="w-full px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg 
                     text-sm font-medium transition-all duration-300
                     sm:opacity-0 sm:group-hover:opacity-100 sm:transform sm:translate-y-2 
                     sm:group-hover:translate-y-0"
          >
            View Details
          </button>
        </div>

        {/* Featured Badge */}
        {featured && (
          <div className="absolute top-3 right-3 sm:top-4 sm:right-4">
            <span className="px-2 py-1 bg-red-600 text-white text-xs rounded-full">
              Featured
            </span>
          </div>
        )}
      </div>
    </div>
  );
}