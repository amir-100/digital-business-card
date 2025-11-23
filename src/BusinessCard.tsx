import {
  FaPhoneAlt,
  FaEnvelope,
  FaWhatsapp,
  FaInstagram,
  FaFacebookF,
  FaRegWindowMaximize,
} from "react-icons/fa";
import "./BusinessCard.css";

export default function BusinessCard() {
  return (
    <div className="card light">
      <img src="/logo.png" alt="Logo" className="card-logo" />
      <h3 className="card-company">קליניקה לעיסוי רפואי ושיקומי</h3>
      <img src="/profile.jpeg" alt="Profile" className="card-image" />
      <h1 className="card-name">דודי בן ישי</h1>
      <h2 className="card-title">מעסה רפואי</h2>

      <p className="card-company">מגע ותנועה שמקדמים ריפוי</p>
      <div className="button-grid">
        <div className="icon-container">
          <a
            href="https://dudimassage.co.il"
            target="_self"
            rel="noopener noreferrer"
            className="icon-btn"
            title="Website"
          >
            <FaRegWindowMaximize />
          </a>
          <span className="icon-label">כניסה לאתר</span>
        </div>

        <div className="icon-container">
          <a
            href="https://wa.me/972545605508"
            target="_self"
            rel="noopener noreferrer"
            className="icon-btn"
            title="WhatsApp"
          >
            <FaWhatsapp />
          </a>
          <span className="icon-label">וואטסאפ</span>
        </div>

        <div className="icon-container">
          <a href="tel:+972545605508" className="icon-btn" title="Phone">
            <FaPhoneAlt />
          </a>
          <span className="icon-label">טלפון</span>
        </div>

        <div className="icon-container">
          <a
            href="mailto:dbenyshai@gmail.com"
            className="icon-btn"
            title="Email"
          >
            <FaEnvelope />
          </a>
          <span className="icon-label">אימייל</span>
        </div>

        <div className="icon-container">
          <a
            href="https://facebook.com/dwdy.bn.ysy"
            target="_self"
            rel="noopener noreferrer"
            className="icon-btn"
            title="Facebook"
          >
            <FaFacebookF />
          </a>
          <span className="icon-label">פייסבוק</span>
        </div>

        <div className="icon-container">
          <a
            href="https://instagram.com/dudi_ben_yshai"
            target="_self"
            rel="noopener noreferrer"
            className="icon-btn"
            title="Instagram"
          >
            <FaInstagram />
          </a>
          <span className="icon-label">אינסטגרם</span>
        </div>
      </div>

      <a href="/dudib.vcf" className="save-btn" download="dudib.vcf">
        שמירה באנשי הקשר
      </a>
    </div>
  );
}
