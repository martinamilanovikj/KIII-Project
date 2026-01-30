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

const AuthorsGrid = ({ authors, onEdit, onDelete }) => {
    return (
        <Grid container spacing={3}>
            {authors.map((author) => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={author.id}>
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
                                {author.name} {author.surname}
                            </Typography>

                            <Typography
                                color="text.secondary"
                                sx={{ mb: 2 }}
                            >
                                Author
                            </Typography>

                            <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                                <IconButton
                                    color="success"
                                    onClick={() => onEdit(author)}
                                >
                                    <Edit />
                                </IconButton>

                                <IconButton
                                    color="error"
                                    onClick={() => onDelete(author.id)}
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

export default AuthorsGrid;
