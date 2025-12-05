import React from "react";
import { Container } from "react-bootstrap";

function Footer() {
  return (
    <footer className="bg-dark text-light py-3 fixed-bottom">
      <Container fluid className="text-center">
        <small>© 2025 BUISSERETH Getro Student Management App - Tous droits réservés</small>
      </Container>
    </footer>
  );
}

export default Footer;
