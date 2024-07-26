import React from "react";
import "./Heading.css";
import { Container } from "react-bootstrap";

function Heading() {
 
  return (
    <Container className="heading bg-secondary text-center border-3 border-top " fluid >
      <h1 className="text-white mt-2">The Generics</h1>
      
    </Container>
  );
}

export default Heading;
