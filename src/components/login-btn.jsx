import { useSession, signIn, signOut } from "next-auth/react";
import { Navbar, Container, NavDropdown, Nav } from "react-bootstrap";
export function LoginButton() {
  const { data: session } = useSession();
  //si es anonimo
  //si esta autenticado
  //rol administrador
  //rol usuario => otros roles
  if (session) {
    return (
      <>
        <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav justify-content-end">
              <Nav className="me-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/company">Companies</Nav.Link>
                <NavDropdown
                  title={session.user.email}
                  id="basic-nav-dropdown justify-content-end"
                >
                  <NavDropdown.Item href="account">Account</NavDropdown.Item>
                  <NavDropdown.Item href="help">Help</NavDropdown.Item>
                  <NavDropdown.Item href="/settings">Settings</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item onClick={() => signOut()}>
                    Sign out
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    );
  }
  return (
    <>
      <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav justify-content-end">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/services">Services</Nav.Link>
              <Nav.Link href="/projects">Projects</Nav.Link>
              <Nav.Link onClick={() => signIn()}>Log in</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
