import { Link } from "react-router-dom";

export default function ProfileCard({ title, Icon, route }) {
  return (
    <Link to={route}>
      <div className="group flex flex-col items-center cursor-pointer transition-transform duration-300">
        <div className="w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-lg flex items-center justify-center bg-neutral-800 border-4 border-transparent group-hover:border-white transition">
          <Icon className="w-12 h-12 text-gray-400 group-hover:text-white transition duration-300" />
        </div>
        <p className="mt-3 text-gray-500 group-hover:text-white text-sm sm:text-base font-medium">
          {title}
        </p>
      </div>
    </Link>
  );
}
