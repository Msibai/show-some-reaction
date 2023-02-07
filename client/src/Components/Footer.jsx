import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../css/footer.css";

export default function () {
  return (
    <>
      <footer className="footer">
        <nav>
          <Link to="/">
            <img className="logo-footer" alt="logo" src="src/images/logo.jpg" />
          </Link>
          <p className="copyright">
            Copyright &copy; <span className="year">2023</span> by Show some
            REACTion
          </p>
        </nav>

        <nav>
          <p className="footer-heading">Follow us</p>
          <ul className="footer-icons">
            <li>
              <a
                className="footer-link"
                href="https://www.facebook.com/"
                rel="noopener"
                target="_blank"
              >
                <FaFacebook />
              </a>
            </li>
            <li>
              <a
                className="footer-link"
                href="https://www.instagram.com/"
                rel="noopener"
                target="_blank"
              >
                <FaInstagram />
              </a>
            </li>
            <li>
              <a
                className="footer-link"
                href="https://twitter.com/"
                rel="noopener"
                target="_blank"
              >
                <FaTwitter />
              </a>
            </li>
          </ul>
        </nav>

        <nav>
          <p className="footer-heading">Account</p>
          <ul className="footer-nav">
            <li>
              <Link to="signup">Create account</Link>
            </li>
            <li>
              <Link to="login" className="footer-link">
                Sign in
              </Link>
            </li>
          </ul>
        </nav>
      </footer>
    </>
  );
}
