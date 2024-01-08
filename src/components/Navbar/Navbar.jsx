import { Container } from "react-bootstrap";
import styles from "./Navbar.module.css";
import NavbarLinks from "../../features/components/Navbar/NavbarLinks/NavbarLinks";

export default function Navbar() {
  return (
    <nav className={`${styles.navbar} position-absolute top-0 start-0 w-100`}>
      <Container className="d-flex justify-content-between align-items-center">
        <img className={styles.nav__logo} src="/assets/images/LOGOWhite_EN 1.png" alt="" />
        <NavbarLinks />
      </Container>
    </nav>
  );
}
