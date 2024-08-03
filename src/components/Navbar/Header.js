import React, { useContext } from "react";
import { Button, Navbar, Nav, Container } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import Cart from "../Cart/Cart";
import { Context } from "../ContextApi/Context";
import { AuthContext } from "../ContextApi/auth-Context";


function Header() {
  const ctx=useContext(Context);
  const { cartCount, showCart } = useContext(Context);
  const AuthCtx = useContext(AuthContext);
  const isLoggedIn = AuthCtx.isLoggedIn;
  const navigate = useNavigate();

  const cartHandler = () => {
    ctx.setCartOpen(true);
  };

  const logoutHandler = () => {
    AuthCtx.logOut();
    navigate("/", { replace: true });
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top" className="py-1">
      <Container>
        <Navbar.Brand className="fs-3">React Store</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className={`mx-auto ${isLoggedIn ? 'd-flex' : 'd-none'}`}>
            <Nav.Link as={NavLink} to="/home" className="my-2">
              HOME
            </Nav.Link>
            {isLoggedIn && (
              <Nav.Link as={NavLink} to="/store" className="my-2">
                SHOP
              </Nav.Link>
            )}
            <Nav.Link as={NavLink} to="/about" className="my-2">
              ABOUT
            </Nav.Link>
            <Nav.Link as={NavLink} to="/contact-us" className="my-2">
              CONTACT US
            </Nav.Link>
          </Nav>
          <Nav>
            {!isLoggedIn ? (
              <Nav.Link as={NavLink} to="/login">
                <Button variant="primary" size="sm">Login</Button>
              </Nav.Link>
            ) : (
              <Button variant="danger" size="sm" onClick={logoutHandler}>
                LogOut
              </Button>
            )}
            {showCart && isLoggedIn && (
              <Button
                variant="outline-light"
                className="ms-2"
                size="sm"
                onClick={cartHandler}
              >
                Cart ({cartCount})
              </Button>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
      {ctx.cartOpen && <Cart setCartOpen={ctx.setCartOpen} />}
    </Navbar>
  );
}

export default Header;
