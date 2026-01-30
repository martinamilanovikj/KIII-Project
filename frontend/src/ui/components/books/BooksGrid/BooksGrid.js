//
// import React from 'react';
// import {
//     Grid,
//     Card,
//     CardContent,
//     Typography,
//     IconButton,
//     Box,
//     Chip
// } from '@mui/material';
// import { Edit, Delete, ShoppingCart } from '@mui/icons-material';
//
// const BooksGrid = ({ books, onEdit, onDelete, onRent }) => {
//     return (
//         <Grid container spacing={3}>
//             {books.map((book) => (
//                 <Grid item xs={12} sm={6} md={4} lg={3} key={book.id}>
//                     <Card
//                         sx={{
//                             height: '100%',
//                             borderRadius: 3,
//                             boxShadow: 3,
//                             transition: '0.2s',
//                             '&:hover': {
//                                 boxShadow: 6,
//                                 transform: 'translateY(-4px)'
//                             }
//                         }}
//                     >
//                         <CardContent>
//
//                             <Typography variant="h6" fontWeight="bold">
//                                 {book.name}
//                             </Typography>
//
//                             <Typography color="text.secondary">
//                                 {book.author?.name} {book.author?.surname}
//                             </Typography>
//
//
//                             <Box sx={{ my: 1 }}>
//                                 <Chip
//                                     label={book.category}
//                                     color="success"
//                                     size="small"
//                                 />
//                             </Box>
//
//
//                             <Typography sx={{ mb: 2 }}>
//                                 📦 Available copies: <b>{book.availableCopies}</b>
//                             </Typography>
//
//                             <Box
//                                 sx={{
//                                     display: 'flex',
//                                     justifyContent: 'space-between',
//                                     alignItems: 'center'
//                                 }}
//                             >
//                                 <IconButton
//                                     color="success"
//                                     disabled={book.availableCopies === 0}
//                                     onClick={() => onRent(book.id)}
//                                 >
//                                     <ShoppingCart />
//                                 </IconButton>
//
//                                 <Box>
//                                     <IconButton
//                                         color="success"
//                                         onClick={() => onEdit(book)}
//                                     >
//                                         <Edit />
//                                     </IconButton>
//
//                                     <IconButton
//                                         color="error"
//                                         onClick={() => onDelete(book.id)}
//                                     >
//                                         <Delete />
//                                     </IconButton>
//                                 </Box>
//                             </Box>
//                         </CardContent>
//                     </Card>
//                 </Grid>
//             ))}
//         </Grid>
//     );
// };
//
// export default BooksGrid;


import React from 'react';
import {
    Grid,
    Card,
    CardContent,
    Typography,
    IconButton,
    Box,
    Chip
} from '@mui/material';
import { Edit, Delete, ShoppingCart } from '@mui/icons-material';

const BooksGrid = ({ books, onEdit, onDelete, onRent }) => {

    const handleRent = (bookId) => {
        if (typeof onRent === 'function') {
            onRent(bookId);
        } else {
            console.warn('onRent is not provided or not a function');
        }
    };


    return (
        <Grid container spacing={3}>
            {books.map((book) => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={book.id}>
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
                                {book.name}
                            </Typography>

                            <Typography color="text.secondary">
                                {book.author?.name} {book.author?.surname}
                            </Typography>

                            <Box sx={{ my: 1 }}>
                                <Chip
                                    label={book.category}
                                    color="success"
                                    size="small"
                                />
                            </Box>

                            <Typography sx={{ mb: 2 }}>
                                📦 Available copies: <b>{book.availableCopies}</b>
                            </Typography>

                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center'
                                }}
                            >
                                <IconButton
                                    color="success"
                                    disabled={book.availableCopies === 0}
                                    onClick={() => handleRent(book.id)}
                                >
                                    <ShoppingCart />
                                </IconButton>

                                <Box>
                                    <IconButton
                                        color="success"
                                        onClick={() => onEdit(book)}
                                    >
                                        <Edit />
                                    </IconButton>

                                    <IconButton
                                        color="error"
                                        onClick={() => onDelete(book.id)}
                                    >
                                        <Delete />
                                    </IconButton>
                                </Box>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
};

export default BooksGrid;
