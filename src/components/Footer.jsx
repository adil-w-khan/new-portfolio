export default function Footer() {
  return (
    <footer className="bg-neutral-950 text-gray-400 text-sm py-6 mt-10">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <p>© {new Date().getFullYear()} Adil Khan. All rights reserved.</p>
        <div className="space-x-4 mt-2 md:mt-0">
          <a href="https://github.com/adil-w-khan" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://linkedin.com/in/adil-w-khan" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="adil-w-khan05@gmail.com">Email</a>
        </div>
      </div>
    </footer>
  );
}
