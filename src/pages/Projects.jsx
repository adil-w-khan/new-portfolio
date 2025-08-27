import { useState, useMemo } from "react";
import PageLayout from "../layouts/PageLayout";
import SectionTitle from "../components/SectionTitle";
import RowCarousel from "../components/RowCarousel";
import ProjectCard from "../components/ProjectCard";
import ProjectModal from "../components/ProjectModal";
import projectsData from "../data/projects";
import { Search, Filter, Grid, List } from 'lucide-react';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeFilters, setActiveFilters] = useState(['all']);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('featured');
  const [viewMode, setViewMode] = useState('rows');

  // Filter categories with counts
  const filterCategories = [
    { key: 'all', label: 'All Projects', count: projectsData.length },
    { key: 'react', label: 'React.js', count: projectsData.filter(p => p.technologies.includes('react')).length },
    { key: 'javascript', label: 'JavaScript', count: projectsData.filter(p => p.technologies.includes('javascript')).length },
    { key: 'java', label: 'Java', count: projectsData.filter(p => p.technologies.includes('java')).length },
    { key: 'ml', label: 'ML/AI', count: projectsData.filter(p => p.technologies.some(t => ['ml', 'ai'].includes(t.toLowerCase()))).length }
  ];

  // Filter projects based on active filters and search
  const filteredProjects = useMemo(() => {
    let projects = [...projectsData];

    // Apply technology filters
    if (!activeFilters.includes('all')) {
      projects = projects.filter(project => 
        activeFilters.some(filter => 
          project.technologies.some(tech => 
            tech.toLowerCase().includes(filter.toLowerCase()) ||
            (filter === 'ml' && ['ml', 'ai'].includes(tech.toLowerCase()))
          )
        )
      );
    }

    // Apply search filter
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      projects = projects.filter(project =>
        project.title.toLowerCase().includes(query) ||
        project.description.toLowerCase().includes(query) ||
        project.category.toLowerCase().includes(query) ||
        project.technologies.some(tech => tech.toLowerCase().includes(query))
      );
    }

    // Sort projects
    projects.sort((a, b) => {
      switch (sortBy) {
        case 'featured':
          if (a.featured && !b.featured) return -1;
          if (!a.featured && b.featured) return 1;
          return b.id - a.id; // Recent first as tiebreaker
        case 'recent':
          return b.id - a.id;
        case 'name':
          return a.title.localeCompare(b.title);
        case 'status':
          const statusOrder = { 'live': 0, 'development': 1, 'completed': 2 };
          return (statusOrder[a.status] || 3) - (statusOrder[b.status] || 3);
        default:
          return 0;
      }
    });

    return projects;
  }, [activeFilters, searchQuery, sortBy]);

  // Group projects for different sections
  const featuredProjects = projectsData.filter(p => p.featured);
  const liveProjects = filteredProjects.filter(p => p.status === 'live');
  const webApps = filteredProjects.filter(p => 
    ['Web Application', 'E-commerce', 'Full-Stack Application'].includes(p.category)
  );
  const games = filteredProjects.filter(p => p.category === 'Game');
  const javaProjects = filteredProjects.filter(p => p.technologies.includes('java'));

  const handleFilterToggle = (filterKey) => {
    if (filterKey === 'all') {
      setActiveFilters(['all']);
    } else {
      setActiveFilters(prev => {
        const newFilters = prev.filter(f => f !== 'all');
        if (newFilters.includes(filterKey)) {
          const updated = newFilters.filter(f => f !== filterKey);
          return updated.length === 0 ? ['all'] : updated;
        } else {
          return [...newFilters, filterKey];
        }
      });
    }
  };

  return (
    <PageLayout>
      {/* Page Header */}
      <div className="mb-8 sm:mb-12 pt-6">
        <SectionTitle
          title="Projects"
          subtitle="A showcase of my development work and technical skills"
        />

        {/* Search and Controls */}
        <div className="flex flex-col lg:flex-row gap-4 mt-6">
          {/* Search Bar */}
          <div className="relative flex-1 max-w-md">
            <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-gray-800 border border-gray-700 rounded-lg 
                       text-white placeholder-gray-400 focus:outline-none focus:border-red-600 
                       transition-colors duration-200"
            />
          </div>

          {/* Sort Dropdown */}
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white 
                     focus:outline-none focus:border-red-600 transition-colors duration-200"
          >
            <option value="featured">Featured First</option>
            <option value="recent">Most Recent</option>
            <option value="name">Alphabetical</option>
            <option value="status">By Status</option>
          </select>

          {/* View Mode Toggle */}
          <div className="flex border border-gray-700 rounded-lg overflow-hidden">
            <button
              onClick={() => setViewMode('rows')}
              className={`px-3 py-2 transition-colors duration-200 ${
                viewMode === 'rows' ? 'bg-red-600 text-white' : 'bg-gray-800 text-gray-400 hover:text-white'
              }`}
            >
              <List size={18} />
            </button>
            <button
              onClick={() => setViewMode('grid')}
              className={`px-3 py-2 transition-colors duration-200 ${
                viewMode === 'grid' ? 'bg-red-600 text-white' : 'bg-gray-800 text-gray-400 hover:text-white'
              }`}
            >
              <Grid size={18} />
            </button>
          </div>
        </div>

        {/* Filter Tags */}
        <div className="flex flex-wrap gap-2 mt-4 pb-2 overflow-x-auto">
          {filterCategories.map((filter) => (
            <button
              key={filter.key}
              onClick={() => handleFilterToggle(filter.key)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium 
                       whitespace-nowrap transition-all duration-200 ${
                activeFilters.includes(filter.key)
                  ? 'bg-red-600 text-white'
                  : 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white'
              }`}
            >
              {filter.label}
              <span className="text-xs opacity-75">({filter.count})</span>
            </button>
          ))}
        </div>

        {/* Active Filters Display */}
        {activeFilters.length > 0 && !activeFilters.includes('all') && (
          <div className="flex items-center gap-2 mt-3 text-sm text-gray-400">
            <Filter size={16} />
            <span>Filtered by: {activeFilters.join(', ')}</span>
            <button
              onClick={() => setActiveFilters(['all'])}
              className="text-red-600 hover:text-red-400 transition-colors duration-200"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>

      {/* Results Count */}
      <div className="mb-6">
        <p className="text-gray-400 text-sm">
          Showing {filteredProjects.length} of {projectsData.length} projects
        </p>
      </div>

      {/* Content based on view mode and filters */}
      {viewMode === 'rows' ? (
        <>
          {/* Featured Projects - always show if no specific filters */}
          {(activeFilters.includes('all') || searchQuery === '') && featuredProjects.length > 0 && (
            <RowCarousel title="Featured Projects" className="mb-8 sm:mb-12">
              {featuredProjects.map((project) => (
                <ProjectCard
                  key={`featured-${project.id}`}
                  project={project}
                  onViewDetails={() => setSelectedProject(project)}
                  featured
                />
              ))}
            </RowCarousel>
          )}

          {/* Live Projects */}
          {liveProjects.length > 0 && (
            <RowCarousel title="Live Projects" className="mb-8 sm:mb-12">
              {liveProjects.map((project) => (
                <ProjectCard
                  key={`live-${project.id}`}
                  project={project}
                  onViewDetails={() => setSelectedProject(project)}
                />
              ))}
            </RowCarousel>
          )}

          {/* Web Applications */}
          {webApps.length > 0 && (
            <RowCarousel title="Web Applications" className="mb-8 sm:mb-12">
              {webApps.map((project) => (
                <ProjectCard
                  key={`webapp-${project.id}`}
                  project={project}
                  onViewDetails={() => setSelectedProject(project)}
                />
              ))}
            </RowCarousel>
          )}

          {/* Games & Interactive */}
          {games.length > 0 && (
            <RowCarousel title="Games & Interactive" className="mb-8 sm:mb-12">
              {games.map((project) => (
                <ProjectCard
                  key={`game-${project.id}`}
                  project={project}
                  onViewDetails={() => setSelectedProject(project)}
                />
              ))}
            </RowCarousel>
          )}

          {/* Java Projects */}
          {javaProjects.length > 0 && (
            <RowCarousel title="Java Projects" className="mb-8 sm:mb-12">
              {javaProjects.map((project) => (
                <ProjectCard
                  key={`java-${project.id}`}
                  project={project}
                  onViewDetails={() => setSelectedProject(project)}
                />
              ))}
            </RowCarousel>
          )}

          {/* All Filtered Results */}
          {(!activeFilters.includes('all') || searchQuery !== '') && (
            <RowCarousel 
              title={searchQuery ? `Search Results for "${searchQuery}"` : 'Filtered Projects'} 
              className="mb-8 sm:mb-12"
            >
              {filteredProjects.map((project) => (
                <ProjectCard
                  key={`filtered-${project.id}`}
                  project={project}
                  onViewDetails={() => setSelectedProject(project)}
                />
              ))}
            </RowCarousel>
          )}
        </>
      ) : (
        /* Grid View */
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {filteredProjects.map((project) => (
            <div key={`grid-${project.id}`} className="w-full">
              <ProjectCard
                project={project}
                onViewDetails={() => setSelectedProject(project)}
                featured={project.featured}
              />
            </div>
          ))}
        </div>
      )}

      {/* No Results */}
      {filteredProjects.length === 0 && (
        <div className="text-center py-12">
          <div className="text-gray-400 mb-4">
            <Filter size={48} className="mx-auto mb-4 opacity-50" />
            <p className="text-lg">No projects found</p>
            <p className="text-sm">Try adjusting your filters or search terms</p>
          </div>
          <button
            onClick={() => {
              setActiveFilters(['all']);
              setSearchQuery('');
            }}
            className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg 
                     transition-colors duration-200"
          >
            Show All Projects
          </button>
        </div>
      )}

      {/* Project Detail Modal */}
      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </PageLayout>
  );
}