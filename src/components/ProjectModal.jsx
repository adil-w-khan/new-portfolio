import { useEffect } from 'react';
import { X, ExternalLink, Github, Star, Calendar, Code, Zap } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    if (project) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        if (originalOverflow) {
          document.body.style.overflow = originalOverflow;
        } else {
          document.body.style.removeProperty('overflow');
        }
      };
    }
  }, [project]);

  useEffect(() => {
    if (!project) return;
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [onClose, project]);

  if (!project) return null;

  const getTechColor = (tech) => {
    const colors = {
      'react': 'bg-blue-600 border-blue-500',
      'javascript': 'bg-yellow-600 border-yellow-500',
      'java': 'bg-orange-600 border-orange-500',
      'ml': 'bg-purple-600 border-purple-500',
      'ai': 'bg-purple-600 border-purple-500'
    };
    return colors[tech.toLowerCase()] || 'bg-gray-600 border-gray-500';
  };

  const getStatusInfo = (status) => {
    const statusMap = {
      'live': { label: 'Live & Active', color: 'bg-green-600', icon: Zap },
      'development': { label: 'In Development', color: 'bg-yellow-600', icon: Code },
      'completed': { label: 'Completed', color: 'bg-blue-600', icon: Calendar }
    };
    return statusMap[status] || { label: 'Unknown', color: 'bg-gray-600', icon: Code };
  };

  const statusInfo = getStatusInfo(project.status);
  const StatusIcon = statusInfo.icon;

  const renderPreview = () => {
    if (project.previewUrl) {
      return (
        <iframe
          src={project.previewUrl}
          className="w-full h-full object-cover"
        />
      );
    } else if (project.githubUrl) {
      const repoPath = project.githubUrl.replace('https://github.com/', '');
      return (
        <img
          src={`https://gh-card.dev/repos/${repoPath}.svg`}
          alt={project.title}
          className="w-full h-full object-contain p-2 bg-gray-900"
        />
      );
    } else if (project.image) {
      return (
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
      );
    } else {
      return (
        <div className="w-full h-full flex items-center justify-center bg-gray-900">
          <Code size={80} className="text-gray-600" />
        </div>
      );
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose} />

      <div className="relative bg-neutral-900 border border-gray-700 rounded-lg shadow-2xl
                      w-full h-full max-h-full
                      sm:w-[90vw] sm:h-[90vh] sm:max-w-5xl
                      md:w-[85vw] md:h-[85vh]
                      lg:w-[80vw] lg:max-h-[90vh]
                      flex flex-col">

        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-black/70 
                     text-white rounded-full transition-colors duration-200"
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        <div className="flex-1 overflow-y-auto overscroll-contain">
          {/* Hero Section */}
          <div className="relative">
            <div className="aspect-video sm:aspect-[2.5/1] bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden">
              {renderPreview()}
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />

            <div className="absolute top-4 left-4 flex gap-2">
              <span className={`flex items-center gap-1 px-3 py-1 text-sm text-white rounded-full ${statusInfo.color}`}>
                <StatusIcon size={14} />
                {statusInfo.label}
              </span>
              {project.featured && (
                <span className="flex items-center gap-1 px-3 py-1 bg-red-600 text-white text-sm rounded-full">
                  <Star size={14} />
                  Featured
                </span>
              )}
            </div>
          </div>

          {/* Content */}
          <div className="p-4 sm:p-6 lg:p-8">
            <div className="mb-6 sm:mb-8">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                <div className="flex-1">
                  <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 pr-8">
                    {project.title}
                  </h1>
                  <p className="text-lg sm:text-xl text-gray-300 mb-3">{project.category}</p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-2 flex-shrink-0">
                  {project.previewUrl && (
                    <a
                      href={project.previewUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 
                               text-white rounded-lg transition-colors duration-200 text-sm font-medium"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                  )}
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 
                             text-white rounded-lg transition-colors duration-200 border border-gray-700 text-sm font-medium"
                  >
                    <Github size={16} />
                    View Code
                  </a>
                </div>
              </div>
            </div>

            <div className="mb-6 sm:mb-8">
              <h3 className="text-lg font-semibold text-white mb-3">About This Project</h3>
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base mb-4">
                {project.longDescription || project.description}
              </p>
            </div>

            {project.keyFeatures && project.keyFeatures.length > 0 && (
              <div className="mb-6 sm:mb-8">
                <h3 className="text-lg font-semibold text-white mb-4">Key Features</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {project.keyFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3 text-gray-300 text-sm sm:text-base">
                      <Star size={16} className="text-red-600 mt-1 flex-shrink-0" />
                      <span className="leading-relaxed">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="mb-6 sm:mb-8">
              <h3 className="text-lg font-semibold text-white mb-4">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className={`px-4 py-2 text-white rounded-lg text-sm border ${getTechColor(tech)}`}
                  >
                    {tech.charAt(0).toUpperCase() + tech.slice(1)}
                  </span>
                ))}
              </div>
            </div>

            <div className="border-t border-gray-800 pt-6">
              <h3 className="text-lg font-semibold text-white mb-4">Project Links</h3>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                {project.previewUrl && (
                  <a
                    href={project.previewUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-700 
                             text-white rounded-lg transition-colors duration-200 font-medium"
                  >
                    <ExternalLink size={18} />
                    Visit Live Site
                  </a>
                )}
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-700 
                           text-white rounded-lg transition-colors duration-200 border border-gray-700 font-medium"
                >
                  <Github size={18} />
                  View Source Code
                </a>
              </div>
            </div>

            <div className="h-4"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
