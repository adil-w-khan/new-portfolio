import { User, Briefcase, Code2, FileText, Mail } from "lucide-react";
import ProfileCard from "../components/ProfileCard";
import Billboard from "../components/Billboard";
import StatsStrip from "../components/StatsStrip";

export default function Home() {
  const profiles = [
    { title: "About Me", Icon: User, route: "/about", bg: "bg-blue-600" },
    { title: "Work Experience", Icon: Briefcase, route: "/experience", bg: "bg-green-600" },
    { title: "Projects", Icon: Code2, route: "/projects", bg: "bg-yellow-600" },
    { title: "Resume", Icon: FileText, route: "/resume", bg: "bg-pink-600" },
    { title: "Contact", Icon: Mail, route: "/contact", bg: "bg-purple-600" },
  ];

  return (
    <div className="flex flex-col">
      {/* Profile Chooser */}
      <section className="h-screen bg-neutral-950 flex flex-col items-center justify-center">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-200 mb-10 pt-10">
          Who's Watching?
        </h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {profiles.map((p) => (
            <ProfileCard key={p.title} title={p.title} Icon={p.Icon} route={p.route} bg={p.bg} />
          ))}
        </div>
      </section>

      {/* Billboard */}
      <Billboard />

      {/* Stats Strip */}
      <StatsStrip />
    </div>
  );
}
