import  { useEffect, useState } from 'react';
import { Card, CardContent, Typography, Grid } from '@mui/material';
import axios from 'axios';

const HotelList = () => {
    const [hoteles, setHoteles] = useState([]);

    useEffect(() => {
        async function fetchHoteles() {
            try {
                const response = await axios.get('ttp://localhost:3000/hotels/');
                setHoteles(response.data);
            } catch (error) {
                console.error(error);
            }
        }

        fetchHoteles();
    }, []);

    return (
        <Grid container spacing={2}>
            {hoteles.map((hotel) => (
                <Grid item key={hotel._id} xs={12} sm={6} md={4}>
                    <Card>
                        <CardContent>
                            <Typography variant="h5" component="div">
                                {hotel.nombre}
                            </Typography>
                            <Typography color="text.secondary">
                                Ubicación: {hotel.ubicacion}
                            </Typography>
                            <Typography color="text.secondary">
                                Capacidad Máxima: {hotel.capacidadMaximaPorHabitacion} personas por habitación
                            </Typography>
                            <Typography color="text.secondary">
                                Habitaciones:
                                {hotel.habitaciones.map((habitacion) => (
                                    <div key={habitacion.tipo}>
                                        {habitacion.cantidad} {habitacion.tipo}
                                    </div>
                                ))}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
};

export default HotelList;
