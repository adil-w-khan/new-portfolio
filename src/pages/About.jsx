import { motion } from "framer-motion";
import PageLayout from "../layouts/PageLayout";
import StatsStrip from "../components/StatsStrip";
import SectionTitle from "../components/SectionTitle";
import skills from "../data/skills";
import myHero from '/assets/my_hero.jpeg';

export default function About() {
  return (
    <PageLayout>
      {/* In-text Hero Section */}
      <section className="relative flex items-center justify-center min-h-[300px] bg-black">
        <div className="text-center py-16 px-4 w-full">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-2 text-white">
            About Me
          </h1>
        </div>
      </section>

      {/* About Content */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12">
          {/* Bio */}
          <motion.div
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Hi, I'm Adil 👋
            </motion.h2>

            <motion.p
              className="text-lg md:text-xl text-gray-300 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              I'm currently a student at Rutgers University–New Brunswick, pursuing a double major in Computer Science and Data Science.
              I’m passionate about the technical side of computer science, helping others, and contributing to meaningful projects. 
              I’m especially interested in the fields of software engineering and data science, where I can apply my strong programming and algorithmic thinking skills. 
              As I continue my journey at Rutgers, my goals are to expand my technical abilities, grow my network, and take advantage of every opportunity to learn and make an impact. 
              Outside of academics and professional development, I’m a big fan of soccer and Formula 1, I love traveling and volunteering whenever I can, and I’m also passionate about teaching. 
              I'm always excited to connect with others who are passionate about technology, innovation, and making a difference!
            </motion.p>
          </motion.div>

          {/* Portrait */}
          <motion.div
            className="flex-1 w-full max-w-sm lg:max-w-md mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <img
              src={myHero}
              alt="Adil W. Khan"
              className="rounded-2xl w-full h-auto object-cover shadow-lg"
            />
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <StatsStrip />

      {/* Skills Section */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <SectionTitle title="Skills & Tools" />

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-8">
          {skills.map((skill, idx) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={idx}
                className="bg-neutral-900 rounded-2xl p-6 flex flex-col items-center shadow-md hover:shadow-xl transition"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.05 }}
              >
                <Icon className={`text-4xl mb-2 ${skill.color}`} />
                <p className="text-lg font-medium">{skill.name}</p>
              </motion.div>
            );
          })}
        </div>
      </section>
    </PageLayout>
  );
}
