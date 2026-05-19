import "./Footer.css";
import githubIcon from '../Assets/Github.svg';
import linkedinIcon from '../Assets/Linkedin.svg';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">

         <div className="footer-left">
            <a
              href="https://github.com/jiantaoshen"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-link"
            >
              <img
                src={githubIcon}
                alt="GitHub"
                className="social-icon"
              />
            </a>

            <a
              href="https://www.linkedin.com/in/jiantaoshen/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-link"
            >
              <img
                src={linkedinIcon}
                alt="LinkedIn"
                className="social-icon"
              />
            </a>
          </div>

        <div className="footer-center">
          <p className="footer-contact">Contact me</p>
          <p className="footer-contact">Email: jiantaos98@outlook.com</p>
        </div>

        <div className="footer-right">
          <p className="footer-contact">Copyright</p>
          <p className="footer-contact">
            © {new Date().getFullYear()} JIANTAO SHEN. All rights reserved.
          </p>
        </div>

       
        </div>

    </footer>
  );
}