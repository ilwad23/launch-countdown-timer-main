import "./styles/styles.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import PinterestIcon from "@mui/icons-material/Pinterest";
import Instagram from "@mui/icons-material/Instagram";

function Footer() {
  return (
    <div className="footer">
      {/* <img className="bg" src="./images/pattern-hills.svg" /> */}
      <div className="icons">
          <FacebookIcon className="icon" />
        <PinterestIcon className="icon" />
        <Instagram className="icon" />
      </div>
    </div>
  );
}

export default Footer;
