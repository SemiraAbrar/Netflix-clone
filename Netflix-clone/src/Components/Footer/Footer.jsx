import './Footer.css'
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footer__inner">
          <div className="footer__icons">
            <FacebookOutlinedIcon />
            <InstagramIcon />
            <YouTubeIcon />
          </div>
          <div className="footer__data row">
            <div className="col-md-3">
              <ul>
                <li>Audio Description</li>
                <li>Investor Relations</li>
                <li> Legal Notices</li>
              </ul>
            </div>

            <div className="col-md-3">
              <ul>
                <li>Help Centers</li>
                <li>Jobs</li>
                <li> Cookie Preferences</li>
              </ul>
            </div>
            <div className="col-md-3">
              <ul>
                <li>Gift Cards</li>
                <li>Terms of use </li>
                <li> Corporate Information</li>
              </ul>
            </div>
            <div className="col-md-3">
              <ul>
                <li>Media Center </li>
                <li>Privacy </li>
                <li> Contact Us</li>
              </ul>
            </div>
          </div>
          <div className="footer__service">
            <p>Service Code</p>
          </div>
          <div className="copy-write">&copy;1997-2024 Netflix, Inc.</div>
        </div>
      </div>
    </>
  );
}

export default Footer