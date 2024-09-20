import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';

export default function DrinkCard({ image, title, description, button1Text, button2Text }) {
  return (
    <Card 
    sx={{ 
      maxWidth: '100%', 
      display: 'flex', 
      flexDirection: 'column',   // Flexbox to stack items vertically
      justifyContent: 'space-between',  // Space the content evenly
      height: '100%'             // Full height for uniform size
    }}
  >
    <CardMedia
      sx={{ height: 140 }}
      image={image}
      title={title}
    />
    
    <Box sx={{ flexGrow: 1 }}>  {/* Ensures content and buttons are spaced properly */}
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {description}
        </Typography>
      </CardContent>
    </Box>

    <CardActions>
      <Button size="small">{button1Text}</Button>
      <Button size="small">{button2Text}</Button>
    </CardActions>
  </Card>
  );
}
