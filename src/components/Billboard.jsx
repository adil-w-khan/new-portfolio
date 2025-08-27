export default function Billboard() {
  return (
    <section className="relative h-[80vh] flex items-center">
      {/* Background video/image */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
        src="/assets/hero-bg.mp4"
        autoPlay
        loop
        muted
      />
      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10 -z-10" />

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4">Adil Khan</h1>
        <p className="text-lg md:text-2xl text-gray-300 mb-6">
          Software, Data, AI Engineer & Tech Enthusiast
        </p>
        <div className="flex space-x-4">
          <a
            href="/projects"
            className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-lg font-semibold transition"
          >
            View Projects
          </a>
          <a
            href="/resume"
            className="bg-gray-700 hover:bg-gray-600 px-6 py-3 rounded-lg font-semibold transition"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}
