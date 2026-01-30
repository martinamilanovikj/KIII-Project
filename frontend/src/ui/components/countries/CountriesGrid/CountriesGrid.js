import React from 'react';
import {
    Grid,
    Card,
    CardContent,
    Typography,
    IconButton,
    Box
} from '@mui/material';
import { Edit, Delete } from '@mui/icons-material';

const CountriesGrid = ({ countries, onEdit, onDelete }) => {
    return (
        <Grid container spacing={3}>
            {countries.map((country) => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={country.id}>
                    <Card
                        sx={{
                            height: '100%',
                            borderRadius: 3,
                            boxShadow: 3,
                            transition: '0.2s',
                            '&:hover': {
                                boxShadow: 6,
                                transform: 'translateY(-4px)'
                            }
                        }}
                    >
                        <CardContent>
                            <Typography variant="h6" fontWeight="bold">
                                {country.name}
                            </Typography>

                            <Typography color="text.secondary" sx={{ mb: 2 }}>
                                🌍 {country.continent}
                            </Typography>

                            <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                                <IconButton
                                    color="success"
                                    onClick={() => onEdit(country)}
                                >
                                    <Edit />
                                </IconButton>

                                <IconButton
                                    color="error"
                                    onClick={() => onDelete(country.id)}
                                >
                                    <Delete />
                                </IconButton>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
};

export default CountriesGrid;
