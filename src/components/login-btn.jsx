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
        <Navbar collapseOnSelect expand="md" bg="light" variant="light">
          <Container>
            <Navbar.Brand href="/">Alianza Terrestre</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav justify-content-end">
              <Nav className="me-auto">
                <Nav.Link href="/">Inicio</Nav.Link>
                <Nav.Link href="/company">Empresa</Nav.Link>
                <Nav.Link href="/tracking">Seguimiento</Nav.Link>
                <Nav.Link href="/flota">Flota</Nav.Link>
                <Nav.Link href="/financiero">Mod. Financiero</Nav.Link>
                <NavDropdown
                  title={session.user.email}
                  id="basic-nav-dropdown justify-content-end"
                >
                  <NavDropdown.Item href="account">Cuenta</NavDropdown.Item>
                  <NavDropdown.Item href="help">Ayuda</NavDropdown.Item>
                  <NavDropdown.Item href="/settings">Configuración</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item onClick={() => signOut()}>
                    Salir
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
      <Navbar collapseOnSelect expand="md" bg="light" variant="light">
        <Container>
          <Navbar.Brand href="/">Alianza Terrestre</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav justify-content-end">
            <Nav className="me-auto">
              <Nav.Link href="/">Inicio</Nav.Link>
              <Nav.Link href="/services">Servicios</Nav.Link>
              <Nav.Link href="/projects">Proyectos</Nav.Link>
              <Nav.Link onClick={() => signIn()}>Log in</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
