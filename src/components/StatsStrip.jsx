export default function StatsStrip() {
  const stats = [
    { label: "Years of Experience", value: "3+" },
    { label: "Projects Built", value: "20+" },
    { label: "Tech Stack", value: "React, Spring Boot, MySQL" },
  ];

  return (
    <section className="bg-neutral-900 py-8">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-around items-center gap-6 px-6">
        {stats.map((s) => (
          <div
            key={s.label}
            className="flex flex-col items-center text-center"
          >
            <p className="text-3xl font-bold text-red-600">{s.value}</p>
            <p className="text-gray-400 text-sm md:text-base">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
