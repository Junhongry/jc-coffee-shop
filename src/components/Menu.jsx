import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import latte from '../assets/latte.jpeg'

export default function Menu() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={latte}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Latte
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Latte description here
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Button</Button>
        <Button size="small">Button2</Button>
      </CardActions>
    </Card>
  );
}