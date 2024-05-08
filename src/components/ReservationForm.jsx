import { useState } from 'react';
import { Container, TextField, Button, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import axios from 'axios';

const ReservationForm = () => {
    const [datosReserva, setDatosReserva] = useState({
        hotelId: '',
        habitacionId: '',
        fechaInicio: '',
        fechaFin: '',
        numeroPersonas: '',
        tipoAlojamiento: '',
        temporadaId: ''
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
                    name="hotelId"
                    label="Hotel ID"
                    value={datosReserva.hotelId}
                    onChange={handleChange}
                    fullWidth    
                />
                <TextField
                    name="habitacionId"
                    label="Habitación ID"
                    value={datosReserva.habitacionId}
                    onChange={handleChange}
                    fullWidth
                    marginTop={2}
                />
                <TextField
                    name="fechaInicio"
                    label="Fecha de Inicio"
                    type="date"
                    value={datosReserva.fechaInicio}
                    onChange={handleChange}
                    fullWidth
                />
                <TextField
                    name="fechaFin"
                    label="Fecha de Fin"
                    type="date"
                    value={datosReserva.fechaFin}
                    onChange={handleChange}
                    fullWidth
                />
                <TextField
                    name="numeroPersonas"
                    label="Número de Personas"
                    type="number"
                    value={datosReserva.numeroPersonas}
                    onChange={handleChange}
                    fullWidth
                />
                <FormControl fullWidth>
                    <InputLabel>Tipo de Alojamiento</InputLabel>
                    <Select
                        name="tipoAlojamiento"
                        value={datosReserva.tipoAlojamiento}
                        onChange={handleChange}
                    >
                        <MenuItem value="estándar">Estándar</MenuItem>
                        <MenuItem value="premium">Premium</MenuItem>
                        <MenuItem value="VIP">VIP</MenuItem>
                    </Select>
                </FormControl>
                <TextField
                    name="temporadaId"
                    label="Temporada ID"
                    value={datosReserva.temporadaId}
                    onChange={handleChange}
                    fullWidth
                />
                <Button type="submit">Reservar</Button>
            </form>
        </Container>
    );
};

export default ReservationForm;
