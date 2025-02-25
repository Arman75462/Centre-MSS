import "./styles/ContactPage.css";
import { useState } from "react";
import contactImage from "/src/assets/images/contactImage.webp";
import instagramLogo from "/src/assets/images/instagramLogo.webp";
import facebookLogo from "/src/assets/images/facebookLogo.png";
import tiktokLogo from "/src/assets/images/tiktokLogo.webp";
import mapImage from "/src/assets/images/mapImage.webp";

export default function ContactPage() {
  const [isMapLoaded, setIsMapLoaded] = useState(false);

  const handleClick = () => {
    setIsMapLoaded(true);
  };

  return (
    <section className="ContactPage page-appearance-animation">
      <h2 className="ContactPage__title">Entrons en contact.</h2>

      <div className="ContactPage__content">
        <img
          src={contactImage}
          alt="Personnes discutant et partageant leur expérience sportive"
          className="ContactPage__image"
        />

        <div className="ContactPage__info">
          <p className="ContactPage__info-text">
            Contactez-nous pour discuter de la manière dont nous pouvons vous
            aider à atteindre vos objectifs et à sculpter le corps de vos rêves.
          </p>

          <div className="ContactPage__details">
            <p>
              <strong>Addresse:</strong>
              <br /> 2512 Boulevard Ste-Sophie, Sainte-Sophie, QC, Canada,
              Quebec
            </p>
            <p>
              <strong>Téléphone:</strong> <br />
              450-436-0368
            </p>
          </div>
          <div className="ContactPage__hours-socials">
            <p className="ContactPage__hours-socials-container">
              <strong>Heures d'ouverture:</strong>
              <br /> En semaine | 9h00 à 21h00
              <br /> Fin de semaine | 10h00 à 17h00
            </p>
            <div className="ContactPage__hours-socials-container">
              <strong>Socials:</strong>
              <br />
              <div className="ContactPage__socials-links">
                <a href="https://www.facebook.com/p/Centre-MSS-61564326750350/">
                  <img src={facebookLogo} alt="Logo Facebook" />
                </a>
                <a href="https://www.instagram.com/explore/locations/402173429645015/centre-mss/">
                  <img src={instagramLogo} alt="Logo Instagram" />
                </a>
                <a href="https://www.tiktok.com/@centre_mss">
                  <img src={tiktokLogo} alt="Logo TikTok" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h3 className="ContactPage__email gradient-text">
        muscusportsante@gmail.com
      </h3>

      {!isMapLoaded ? (
        <img
          src={mapImage}
          alt="Cliquez pour voir la carte"
          onClick={handleClick}
          className="ContactPage__map-placeholder"
        />
      ) : (
        <iframe
          className="ContactPage__map"
          title="Gym Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11121.338198089822!2d-74.06602615!3d45.810674799999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccf19bbaf6e57d1%3A0xa177ed40e12441fd!2s2512%20Boulevard%20Ste-Sophie%2C%20Sainte-Sophie%2C%20QC%2C%20Canada!5e0!3m2!1sen!2sca!4v1700000000000"
          allowFullScreen
          loading="lazy"
          style={{ border: 0 }}
        ></iframe>
      )}
    </section>
  );
}
