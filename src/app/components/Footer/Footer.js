import Link from 'next/link';
import styles from '../Footer/Footer.module.css';
import { FaInstagram, FaFacebookF, FaYoutube, FaTwitter } from 'react-icons/fa'; 

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Books', href: '/books' },
  { label: 'About Author', href: '/about' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

const socialItems = [
  { label: 'Instagram', href: '#', icon: <FaInstagram /> },
  { label: 'Facebook', href: '#', icon: <FaFacebookF /> },
  { label: 'YouTube', href: '#', icon: <FaYoutube /> },
  { label: 'Twitter', href: '#', icon: <FaTwitter /> },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.logo}>
          <Link href="/">
            Jahid Hasan
          </Link>
        </div>
        <ul className={styles.navList}>
          {navItems.map(({ label, href }) => (
            <li key={label}>
              <Link href={href}>
                {label}
              </Link>
            </li>
          ))}
        </ul>
        <div className={styles.social}>
          {socialItems.map(({ label, href, icon }) => (
            <Link key={label} href={href}>
               {icon}
            </Link>
          ))}
        </div>
      </div>
      <div className={styles.bottom}>
        <p>&copy; {new Date().getFullYear()} Book Quest. All rights reserved.</p>
      </div>
    </footer>
  );
}
