import React from 'react';
import { Card, Button, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar, faTools, faClipboardList, faUsers, faMapMarkedAlt, faCog } from '@fortawesome/free-solid-svg-icons';

const Tarjetas = () => {
  return (
    <Container fluid>
        <div className="row">
        <div className="col-md-4">
            <Card>
            <Card.Body>
                <Card.Title>Vehículos con contrato</Card.Title>
                <Card.Text>
                <FontAwesomeIcon icon={faCar} /> 10
                </Card.Text>
                <Button variant="primary" onClick={() => window.location.href="/contratos"}>
                Ver detalles
                </Button>
            </Card.Body>
            </Card>
        </div>
        <div className="col-md-4">
            <Card>
            <Card.Body>
                <Card.Title>Vehículos en mantenimiento</Card.Title>
                <Card.Text>
                <FontAwesomeIcon icon={faTools} /> 2
                </Card.Text>
                <Button variant="primary" onClick={() => window.location.href="/mantenimiento"}>
                Ver detalles
                </Button>
            </Card.Body>
            </Card>
        </div>
        <div className="col-md-4">
            <Card>
            <Card.Body>
                <Card.Title>Control de extracto de contratos</Card.Title>
                <Card.Text>
                <FontAwesomeIcon icon={faClipboardList} /> 5
                </Card.Text>
                <Button variant="primary" onClick={() => window.location.href="/asignacion"}>
                Ver detalles
                </Button>
            </Card.Body>
            </Card>
        </div>
        <div className="col-md-4">
            <Card>
            <Card.Body>
                <Card.Title>Solicitudes de clientes</Card.Title>
                <Card.Text>
                <FontAwesomeIcon icon={faUsers} /> 3
                </Card.Text>
                <Button variant="primary" onClick={() => window.location.href="/solicitudes"}>
                Ver detalles
                </Button>
            </Card.Body>
            </Card>
        </div>
        <div className="col-md-4">
            <Card>
            <Card.Body>
                <Card.Title>Tracking de vehículos</Card.Title>
                <Card.Text>
                <FontAwesomeIcon icon={faMapMarkedAlt} /> 7
                </Card.Text>
                <Button variant="primary" onClick={() => window.location.href="/tracking"}>
                Ver detalles
                </Button>
            </Card.Body>
            </Card>
        </div>
        <div className="col-md-4">
            <Card>
            <Card.Body>
                <Card.Title>Configuración</Card.Title>
                <Card.Text>
                <FontAwesomeIcon icon={faCog} />
                </Card.Text>
                <Button variant="primary" onClick={() => window.location.href="/configuracion"}>
                Ver detalles
                </Button>
            </Card.Body>
            </Card>
        </div>
        </div>
    </Container>

  );
};

export default Tarjetas;
