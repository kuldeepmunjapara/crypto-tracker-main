import React from "react";
import "./style.css";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Footer() {
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  return (
    <div className="footer">
      <h2 className="logo" onClick={() => topFunction()}>
        CryptoTracker<span>.</span>
      </h2>
      <div className="social-links">
        <a href="https://github.com/kuldeepmunjapara">
          <GitHubIcon className="social-link" />
        </a>
        <a href="mailto:kuldeepmunjapara23@gmail.com">
          <EmailIcon className="social-link" />
        </a>
        <a href="https://www.linkedin.com/in/kuldeep-munjapra-1b2265257/">
          <LinkedInIcon className="social-link" />
        </a>
      </div>
    </div>
  );
}

export default Footer;
