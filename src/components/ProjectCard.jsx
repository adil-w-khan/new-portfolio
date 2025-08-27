import { ExternalLink, Github, Play, Code, Star } from 'lucide-react';

export default function ProjectCard({ project, onViewDetails, featured = false }) {
  const getTechColor = (tech) => {
    const colors = {
      'react': 'bg-blue-600',
      'javascript': 'bg-yellow-600',
      'java': 'bg-orange-600',
      'ml': 'bg-purple-600',
      'ai': 'bg-purple-600'
    };
    return colors[tech.toLowerCase()] || 'bg-gray-600';
  };

  const getStatusColor = (status) => {
    const colors = {
      'live': 'bg-green-600',
      'development': 'bg-yellow-600',
      'completed': 'bg-blue-600'
    };
    return colors[status] || 'bg-gray-600';
  };

  const renderPreview = () => {
    if (project.previewUrl) {
      // Live site iframe preview
      return (
        <iframe
          src={project.previewUrl}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      );
    } else if (project.githubUrl) {
      // GitHub repo preview fallback using gh-card.dev
      const repoPath = project.githubUrl.replace('https://github.com/', '');
      return (
        <img
          src={`https://gh-card.dev/repos/${repoPath}.svg`}
          alt={project.title}
          className="w-full h-full object-contain p-2 bg-gray-900"
        />
      );
    } else if (project.image) {
      // Static image fallback
      return (
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
      );
    } else {
      // Generic code icon fallback
      return (
        <div className="w-full h-full flex items-center justify-center bg-gray-900">
          <Code size={48} className="text-gray-600" />
        </div>
      );
    }
  };

  return (
    <div className={`group relative flex-shrink-0 snap-start cursor-pointer transition-all duration-300 
                   hover:scale-105 transform hover:-translate-y-1
                   w-72 sm:w-80 md:w-84 lg:${featured ? 'w-96' : 'w-80'}`}>
      <div className="bg-neutral-900 rounded-lg overflow-hidden border border-gray-800 
                    hover:border-red-600/50 transition-all duration-300 hover:shadow-2xl 
                    hover:shadow-red-600/10 h-full">
        
        {/* Project Preview */}
        <div className="relative aspect-video bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden">
          {renderPreview()}

          {/* Overlay with quick actions */}
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 
                        transition-opacity duration-300 flex items-center justify-center gap-3">
            {project.previewUrl && (
              <a
                href={project.previewUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 
                         text-white rounded-lg transition-colors duration-200 text-sm font-medium"
              >
                <Play size={16} />
                Live Demo
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 
                         text-white rounded-lg transition-colors duration-200 text-sm font-medium
                         border border-gray-600"
              >
                <Github size={16} />
                Code
              </a>
            )}
          </div>

          {/* Status Badge */}
          <div className="absolute top-3 left-3">
            <span className={`px-2 py-1 text-xs text-white rounded-full ${getStatusColor(project.status)}`}>
              {project.status === 'live' ? 'Live' : project.status === 'development' ? 'In Dev' : 'Complete'}
            </span>
          </div>

          {/* Featured Badge */}
          {featured && (
            <div className="absolute top-3 right-3">
              <span className="flex items-center gap-1 px-2 py-1 bg-red-600 text-white text-xs rounded-full">
                <Star size={12} />
                Featured
              </span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-4 sm:p-6">
          <div className="mb-3">
            <h3 className="font-semibold text-white text-lg group-hover:text-red-400 
                         transition-colors duration-200 truncate">
              {project.title}
            </h3>
            <p className="text-gray-400 text-sm">{project.category}</p>
          </div>

          <p className="text-gray-300 text-sm leading-relaxed line-clamp-3 mb-4">
            {project.description}
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-1 mb-4">
            {project.technologies.slice(0, 4).map((tech, index) => (
              <span
                key={index}
                className={`px-2 py-1 text-xs text-white rounded-full ${getTechColor(tech)}`}
              >
                {tech.charAt(0).toUpperCase() + tech.slice(1)}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="px-2 py-1 bg-gray-800 text-gray-400 rounded-full text-xs">
                +{project.technologies.length - 4}
              </span>
            )}
          </div>

          {/* Key Features Preview */}
          {project.keyFeatures && project.keyFeatures.length > 0 && (
            <div className="mb-4">
              <ul className="space-y-1">
                {project.keyFeatures.slice(0, 2).map((feature, index) => (
                  <li key={index} className="text-xs text-gray-400 flex items-start gap-2">
                    <span className="w-1 h-1 bg-red-600 rounded-full mt-2 flex-shrink-0"></span>
                    <span className="line-clamp-1">{feature}</span>
                  </li>
                ))}
                {project.keyFeatures.length > 2 && (
                  <li className="text-xs text-gray-500">
                    +{project.keyFeatures.length - 2} more features
                  </li>
                )}
              </ul>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex gap-2">
            <button
              onClick={onViewDetails}
              className="flex-1 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg 
                       text-sm font-medium transition-all duration-300 
                       sm:opacity-0 sm:group-hover:opacity-100 sm:transform sm:translate-y-2 
                       sm:group-hover:translate-y-0"
            >
              View Details
            </button>
            
            <div className="flex gap-1 sm:hidden">
              {project.previewUrl && (
                <a
                  href={project.previewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg 
                           transition-colors duration-200"
                >
                  <ExternalLink size={16} />
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg 
                           transition-colors duration-200"
                >
                  <Github size={16} />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
