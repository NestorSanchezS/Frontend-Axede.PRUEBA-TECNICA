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
                                {hotel.name}
                            </Typography>
                            <Typography color="text.secondary">
                                Ubicación: {hotel.location}
                            </Typography>
                            <Typography color="text.secondary">
                                Capacidad Máxima: {hotel.maxinumCapacityRoom} personas por habitación
                            </Typography>
                            <Typography color="text.secondary">
                                Habitaciones:
                                {hotel.bedrooms.map((habitacion) => (
                                    <div key={habitacion.id}>
                                        {habitacion.amount} {habitacion.type}
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
