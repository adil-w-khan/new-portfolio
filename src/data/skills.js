import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJava, FaPython, FaGitAlt } from "react-icons/fa";
import { SiTailwindcss, SiJavascript, SiMysql, SiSpringboot, SiTensorflow, SiScikitlearn, SiPandas, SiNumpy, SiSqlite } from "react-icons/si";

const skills = [
    { name: "Java", icon: FaJava, color: "text-red-700" },
    { name: "React.js", icon: FaReact, color: "text-sky-400" },
    { name: "Spring Boot", icon: SiSpringboot, color: "text-green-600" },
    { name: "Python", icon: FaPython, color: "text-blue-400" },
    { name: "SQL", icon: SiSqlite, color: "text-blue-700" },
    { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
    { name: "Node.js", icon: FaNodeJs, color: "text-green-500" },
    { name: "HTML5", icon: FaHtml5, color: "text-orange-500" },
    { name: "CSS3", icon: FaCss3Alt, color: "text-blue-500" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-400" },
    { name: "MySQL", icon: SiMysql, color: "text-blue-600" },
    { name: "TensorFlow", icon: SiTensorflow, color: "text-orange-400" },
    { name: "scikit-learn", icon: SiScikitlearn, color: "text-yellow-600" },
    { name: "Git", icon: FaGitAlt, color: "text-orange-600" },
    { name: "Pandas", icon: SiPandas, color: "text-black" },
    { name: "NumPy", icon: SiNumpy, color: "text-yellow-500" },
];

export default skills;