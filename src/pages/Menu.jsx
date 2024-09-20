import * as React from 'react';
import DrinkCard from '../Components/DrinkCard';
import { Grid, Box, Typography } from '@mui/material';
import latte from '../assets/latte.jpeg';

// Arrays of drinks for each section
const coffeeDrinks = [
  { image: latte, title: 'Latte', description: 'A creamy coffee drink with steamed milk.' },
  { image: latte, title: 'Espresso', description: 'Strong and rich coffee.' },
  { image: latte, title: 'Cappuccino', description: 'Equal parts espresso, steamed milk, and foam.' },
  { image: latte, title: 'Americano', description: 'Espresso with added hot water.' }
];

const matchaDrinks = [
  { image: latte, title: 'Matcha Latte', description: 'Creamy matcha with steamed milk.' }
];

const otherDrinks = [
  { image: latte, title: 'Chai Latte', description: 'Spiced tea with steamed milk.' }
];

export default function Menu() {
  return (
    <Box sx={{ padding: 4 }}>
      {/* Coffee Section */}
      <Typography variant="h4" component="h2" gutterBottom>
        Coffee
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {coffeeDrinks.map((drink, index) => (
          <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
            <DrinkCard 
              image={drink.image}
              title={drink.title}
              description={drink.description}
              button1Text="Order Now"
              button2Text="Details"
            />
          </Grid>
        ))}
      </Grid>

      {/* Matcha Section */}
      <Typography variant="h4" component="h2" gutterBottom sx={{ marginTop: 6 }}>
        Matcha
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {matchaDrinks.map((drink, index) => (
          <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
            <DrinkCard 
              image={drink.image}
              title={drink.title}
              description={drink.description}
              button1Text="Order Now"
              button2Text="Details"
            />
          </Grid>
        ))}
      </Grid>

      {/* Other Section */}
      <Typography variant="h4" component="h2" gutterBottom sx={{ marginTop: 6 }}>
        Other Drinks
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {otherDrinks.map((drink, index) => (
          <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
            <DrinkCard 
              image={drink.image}
              title={drink.title}
              description={drink.description}
              button1Text="Order Now"
              button2Text="Details"
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}