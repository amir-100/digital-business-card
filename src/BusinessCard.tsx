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
      <img
        src={`${import.meta.env.BASE_URL}logo.png`}
        alt="Logo"
        className="card-logo"
      />
      <h3 className="card-company">קליניקה לעיסוי רפואי ושיקומי</h3>
      <img
        src={`${import.meta.env.BASE_URL}profile.jpeg`}
        alt="Profile"
        className="card-image"
      />
      <h1 className="card-name">דודי בן ישי</h1>
      <h2 className="card-title">מעסה רפואי</h2>

      <p className="card-company">מגע ותנועה שמקדמים ריפוי</p>
      <div className="button-grid">
        <div className="icon-container">
          <a
            href="https://dudimassage.co.il"
            className="icon-btn btn-website"
            title="Website"
          >
            <FaRegWindowMaximize />
          </a>
          <span className="icon-label">כניסה לאתר</span>
        </div>

        <div className="icon-container">
          <a
            href="https://wa.me/972545605508"
            className="icon-btn btn-whatsapp"
            title="WhatsApp"
          >
            <FaWhatsapp />
          </a>
          <span className="icon-label">וואטסאפ</span>
        </div>

        <div className="icon-container">
          <a
            href="tel:+972545605508"
            className="icon-btn btn-phone"
            title="Phone"
          >
            <FaPhoneAlt />
          </a>
          <span className="icon-label">טלפון</span>
        </div>

        <div className="icon-container">
          <a
            href="mailto:dbenyshai@gmail.com"
            className="icon-btn btn-email"
            title="Email"
          >
            <FaEnvelope />
          </a>
          <span className="icon-label">אימייל</span>
        </div>

        <div className="icon-container">
          <a
            href="https://facebook.com/dwdy.bn.ysy"
            className="icon-btn btn-facebook"
            title="Facebook"
          >
            <FaFacebookF />
          </a>
          <span className="icon-label">פייסבוק</span>
        </div>

        <div className="icon-container">
          <a
            href="https://instagram.com/dudi_ben_yshai"
            className="icon-btn btn-instagram"
            title="Instagram"
          >
            <FaInstagram />
          </a>
          <span className="icon-label">אינסטגרם</span>
        </div>
      </div>

      <a
        href={`${import.meta.env.BASE_URL}dudib.vcf`}
        className="save-btn"
        download
      >
        שמירה באנשי הקשר
      </a>
    </div>
  );
}
