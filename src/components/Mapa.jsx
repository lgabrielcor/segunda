'user client'
import {Container} from 'react-bootstrap'
import { MapContainer, TileLayer,Marker,Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import "leaflet-defaulticon-compatibility";
import React, { useEffect, useState } from 'react';

const Mapa = () => {
    const [location, setLocation] = useState({latitude: 4.7202122, longitude: -74.2296598});

    useEffect(() => {
        if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
            const { latitude, longitude } = position.coords;
            setLocation({ latitude, longitude });
            },
            (error) => {
            console.error(error);
            }
        );
        } else {
        console.error('Geolocation is not supported by this browser.');
        }
    }, []);

    return (
        <Container fluid>
            <MapContainer center={[location.latitude, location.longitude]} zoom={13} scrollWheelZoom={true}  style={{ height: '50vh' }}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[location.latitude, location.longitude]}>
                <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
                {location.latitude}, {location.longitude}
                </Popup>
            </Marker>
            </MapContainer>
        </Container>

      );
};

export default Mapa;

