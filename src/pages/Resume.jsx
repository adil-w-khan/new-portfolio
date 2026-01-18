import { Calendar } from "lucide-react";

export default function ResumeSection() {
  return (
    <section id="resume" className="resume-section py-24 bg-black text-white">
      
      {/* Section Title */}
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4">Resume</h2>
        <p className="text-lg md:text-xl text-gray-300">
          You can view my resume below.
        </p>

        {/* Last Updated Badge */}
        <div className="inline-flex items-center gap-2 bg-gray-800 rounded-full px-4 py-2 text-sm text-gray-300 mt-4">
          <Calendar className="w-4 h-4" />
          Updated: January 2026
        </div>
      </div>

      {/* PDF Viewer */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative w-full" style={{ paddingBottom: '130%', border: '4px solid red', borderRadius: '8px', overflow: 'hidden' }}>
          <iframe
            src="https://drive.google.com/file/d/16pDCXM5j0qlsKFxhvo1ePPqHvHCfbgPK/preview"
            title="Adil W. Khan Resume"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              border: 0,
              borderRadius: '8px',
            }}
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}
