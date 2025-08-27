import React from 'react';
import { Mail, Linkedin, Github, MapPin } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import PageLayout from '../layouts/PageLayout';

const Contact = () => {
  return (
    <PageLayout>
      <div className="min-h-screen bg-black flex flex-col items-center justify-center text-white px-4 sm:px-6 lg:px-8 pt-20">
        {/* Page Title */}
        <SectionTitle
          title="Get in Touch"
        />

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-gray-300 mb-12 text-center max-w-2xl">
          I'm always open to discussing new projects, opportunities, or collaborations. Reach out via email or connect with me on LinkedIn and GitHub.
        </p>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-8 w-full max-w-5xl">
          {/* Email */}
          <a
            href="mailto:adil.w.khan05@gmail.com"
            className="flex flex-col items-center justify-center p-6 bg-[#181818] rounded-lg shadow-lg hover:bg-[#E50914] transition-colors duration-300"
          >
            <Mail size={48} className="mb-4" />
            <span className="text-lg sm:text-xl font-semibold">Email</span>
            <span className="text-gray-300 mt-1 text-center text-sm sm:text-base">
              adil.w.khan05@gmail.com
            </span>
          </a>

          {/* Location */}
          <div className="flex flex-col items-center justify-center p-6 bg-[#181818] rounded-lg shadow-lg">
            <MapPin size={48} className="mb-4" />
            <span className="text-lg sm:text-xl font-semibold">Location</span>
            <span className="text-gray-300 mt-1 text-center text-sm sm:text-base">
              New Jersey, USA
            </span>
          </div>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/adil-w-khan/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center p-6 bg-[#181818] rounded-lg shadow-lg hover:bg-[#0077b5] transition-colors duration-300"
          >
            <Linkedin size={48} className="mb-4" />
            <span className="text-lg sm:text-xl font-semibold">LinkedIn</span>
            <span className="text-gray-300 mt-1 text-center text-sm sm:text-base">
              linkedin.com/in/adil-w-khan
            </span>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/adil-w-khan"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center p-6 bg-[#181818] rounded-lg shadow-lg hover:bg-[#333] transition-colors duration-300"
          >
            <Github size={48} className="mb-4" />
            <span className="text-lg sm:text-xl font-semibold">GitHub</span>
            <span className="text-gray-300 mt-1 text-center text-sm sm:text-base">
              github.com/adil-w-khan
            </span>
          </a>
        </div>

        {/* Footer Note */}
        <p className="text-gray-500 mt-12 text-center text-sm sm:text-base">
          Feel free to reach out—I'm happy to connect!
        </p>
      </div>
    </PageLayout>
  );
};

export default Contact;
