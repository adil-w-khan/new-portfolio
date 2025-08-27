import { useState } from "react";
import PageLayout from "../layouts/PageLayout";
import SectionTitle from "../components/SectionTitle";
import RowCarousel from "../components/RowCarousel";
import ExperienceCard from "../components/ExperienceCard";
import ExperienceModal from "../components/ExperienceModal.jsx";
import experienceData from "../data/experience";

export default function Experience() {
  const [selectedExp, setSelectedExp] = useState(null);
  const [filter, setFilter] = useState('all');

  // Group experiences by type
  const featuredExperiences = experienceData.filter(exp => exp.featured);
  const fullTimeRoles = experienceData.filter(exp => exp.type === 'fulltime');
  const internships = experienceData.filter(exp => exp.type === 'internship');
  const freelanceProjects = experienceData.filter(exp => exp.type === 'freelance');
  const nonTechRoles = experienceData.filter(exp => exp.type === 'nontech'); // NEW

  // Filter function
  const getFilteredExperiences = () => {
    switch (filter) {
      case 'fulltime':
        return fullTimeRoles;
      case 'internship':
        return internships;
      case 'freelance':
        return freelanceProjects;
      case 'nontech':
        return nonTechRoles;
      default:
        return experienceData;
    }
  };

  return (
    <PageLayout>
      {/* Page Header */}
      <div className="mb-8 sm:mb-12 pt-6">
        <SectionTitle
          title="Work Experience"
          subtitle="Professional journey and career highlights"
        />

        {/* Filter Tabs */}
        <div className="flex gap-2 mt-4 sm:mt-6 overflow-x-auto pb-2">
          {[
            { key: 'all', label: 'All Experience' },
            { key: 'fulltime', label: 'Full-Time' },
            { key: 'internship', label: 'Internships' },
            { key: 'freelance', label: 'Freelance' },
            { key: 'nontech', label: 'Non-Tech' }
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setFilter(tab.key)}
              className={`px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium whitespace-nowrap 
                       transition-all duration-200 ${
                filter === tab.key
                  ? 'bg-red-600 text-white'
                  : 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Notable Achievements Row */}
      {featuredExperiences.length > 0 && (
        <RowCarousel title="Career Highlights" className="mb-8 sm:mb-12">
          {featuredExperiences.map((exp) => (
            <ExperienceCard
              key={`featured-${exp.id}`}
              experience={exp}
              onSeeMore={() => setSelectedExp(exp)}
              featured
            />
          ))}
        </RowCarousel>
      )}

      {/* Main Experience Row */}
      <RowCarousel 
        title={filter === 'all' ? 'All Experience' : `${filter.charAt(0).toUpperCase() + filter.slice(1)} Roles`}
        className="mb-8 sm:mb-12"
      >
        {getFilteredExperiences().map((exp) => (
          <ExperienceCard
            key={exp.id}
            experience={exp}
            onSeeMore={() => setSelectedExp(exp)}
          />
        ))}
      </RowCarousel>

      {/* Experience by Type (if you want to group) */}
      {filter === 'all' && (
        <>
          {fullTimeRoles.length > 0 && (
            <RowCarousel title="Full-Time Roles" className="mb-8 sm:mb-12">
              {fullTimeRoles.map((exp) => (
                <ExperienceCard
                  key={`ft-${exp.id}`}
                  experience={exp}
                  onSeeMore={() => setSelectedExp(exp)}
                />
              ))}
            </RowCarousel>
          )}

          {internships.length > 0 && (
            <RowCarousel title="Internships & Early Career" className="mb-8 sm:mb-12">
              {internships.map((exp) => (
                <ExperienceCard
                  key={`intern-${exp.id}`}
                  experience={exp}
                  onSeeMore={() => setSelectedExp(exp)}
                />
              ))}
            </RowCarousel>
          )}

          {nonTechRoles.length > 0 && (
            <RowCarousel title="Non-Tech Roles" className="mb-8 sm:mb-12">
              {nonTechRoles.map((exp) => (
                <ExperienceCard
                  key={`nontech-${exp.id}`}
                  experience={exp}
                  onSeeMore={() => setSelectedExp(exp)}
                />
              ))}
            </RowCarousel>
          )}
        </>
      )}

      {/* Experience Detail Modal */}
      <ExperienceModal 
        experience={selectedExp} 
        onClose={() => setSelectedExp(null)} 
      />
    </PageLayout>
  );
}
