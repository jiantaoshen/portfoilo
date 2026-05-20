import githubIcon from '../assets/Github.svg';
import linkedinIcon from '../assets/Linkedin.svg';

export default function Footer() {
  return (
    <footer>
      <div className="flex flex-col md:flex-row justify-between gap-[var(--space-4)] 
        max-w-[1000px] mx-auto mt-[var(--space-2)] mb-[var(--space-2)]">

        <div className="flex gap-[var(--space-2)] items-center">
          <a href="https://github.com/jiantaoshen"
            target="_blank"
            rel="noopener noreferrer"
            className="transition duration-300 hover:scale-110"
          >
            <img src={githubIcon} alt="GitHub" className="w-12 h-12 object-contain"/>
          </a>

          <a href="https://www.linkedin.com/in/jiantaoshen/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition duration-300 hover:scale-110"
          >
            <img src={linkedinIcon} alt="LinkedIn" className="w-12 h-12 object-contain"/>
          </a>
        </div>

        <div className="min-w-[200px] font-semibold text-[var(--color-text)]">
          <p>Contact me</p>
          <p>Email: jiantaos98@outlook.com</p>
        </div>

        <div className="min-w-[200px] font-semibold text-[var(--color-text)]">
          <p>Copyright</p>
          <p>© {new Date().getFullYear()} JIANTAO SHEN. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}