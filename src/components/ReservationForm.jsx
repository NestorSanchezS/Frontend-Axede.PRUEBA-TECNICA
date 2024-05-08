import { useState } from 'react';
import { Container, TextField, Button, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import axios from 'axios';

const ReservationForm = () => {
    const [datosReserva, setDatosReserva] = useState({
        hotel: '',
        room: '',
        startDate: '',
        endDate: '',
        numberOfPeople: '',
        accommodationType: '',
        season: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setDatosReserva({ ...datosReserva, [name]: value });
    };

    const handleSubmit = async (e) => {
        console.log(e)
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/reservation/createReservation', datosReserva);
            console.log(response.data.message);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <Container>
            <form onSubmit={handleSubmit}>
        
                <TextField
                    name="hotel"
                    label="Hotel"
                    value={datosReserva.hotel.id}
                    onChange={handleChange}
                    fullWidth    
                />
                <TextField
                    name="room"
                    label="Habitación"
                    value={datosReserva.room.id}
                    onChange={handleChange}
                    fullWidth
                    marginTop={2}
                />
                <TextField
                    name="startDate"
                    label="Fecha de Inicio"
                    type="date"
                    value={datosReserva.startDate}
                    onChange={handleChange}
                    fullWidth
                />
                <TextField
                    name="endDate"
                    label="Fecha de Fin"
                    type="date"
                    value={datosReserva.endDate}
                    onChange={handleChange}
                    fullWidth
                />
                <TextField
                    name="numberOfPeople"
                    label="Número de Personas"
                    type="number"
                    value={datosReserva.numberOfPeople}
                    onChange={handleChange}
                    fullWidth
                />
                <FormControl fullWidth>
                    <InputLabel>Tipo de Alojamiento</InputLabel>
                    <Select
                        name="accommodationType"
                        value={datosReserva.accommodationType}
                        onChange={handleChange}
                    >
                        <MenuItem value="standard">Estándar</MenuItem>
                        <MenuItem value="premium">Premium</MenuItem>
                        <MenuItem value="VIP">VIP</MenuItem>
                    </Select>
                </FormControl>
                <TextField
                    name="season"
                    label="Temporada"
                    value={datosReserva.season.Id}
                    onChange={handleChange}
                    fullWidth
                />
                <Button type="submit">Reservar</Button>
            </form>
        </Container>
    );
};

export default ReservationForm;
