import React from "react";
import './Footer.css'
import { Container, NavbarBrand } from "react-bootstrap";
function Footer() {
  return (
    <Container className="footer w-100 bg-info" fluid>
      <NavbarBrand className="text-white fs-1">The Generics</NavbarBrand>
      <div className="social-media">
        <a href="https://www.youtube.com/">
          <img src="https://t3.ftcdn.net/jpg/04/74/05/94/360_F_474059464_qldYuzxaUWEwNTtYBJ44VN89ARuFktHW.jpg" alt="youtube" />
        </a>
        <a href="https://open.spotify.com/">
          <img src="https://cdn.pixabay.com/photo/2018/05/08/21/29/spotify-3384019_1280.png"  alt="soptify"/>
        </a>
        <a href="https://www.facebook.com/">
          <img src="https://upload.wikimedia.org/wikipedia/commons/c/cd/Facebook_logo_%28square%29.png"  alt="facebook"/>
        </a>
      </div>
    </Container>
  );
}

export default Footer;
