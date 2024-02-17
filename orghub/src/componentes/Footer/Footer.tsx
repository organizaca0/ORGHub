//import { useEffect, useState } from "react";
import styles from './Footer.module.css'

const Footer = () => {
    return (
<footer className={styles.Footer}>
  <div className={styles.container}>
  <div className={styles.row}>
      <div className={styles.col}>
        <h3>About Us</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, aliquam dolor sit amet.</p>
      </div>
      <div className={styles.col}>
        <h3>Contact Us</h3>
        <ul>
          <li><a href="mailto:info@example.com">info@example.com</a></li>
          <li><a href="tel:+1234567890">+1 (234) 567-890</a></li>
          <li><a href="https://www.example.com/contact">Website Contact Form</a></li>
        </ul>
      </div>
      <div className={styles.col}>
        <h3>Connect with Us</h3>
        <ul className={styles.socialMedia}>
          <li><a href="https://www.facebook.com/example"><i className="fab fa-facebook-f"></i> Facebook</a></li>
          <li><a href="https://www.twitter.com/example"><i className="fab fa-twitter"></i> Twitter</a></li>
          <li><a href="https://www.instagram.com/example"><i className="fab fa-instagram"></i> Instagram</a></li>
        </ul>
      </div>
    </div>
    <div className={styles.copyright}>
      <p>&copy; 2024 ORGHub, um projeto da ORGANIZAÇÃO.</p>
    </div>
  </div>
</footer>
    );
}

export default Footer;