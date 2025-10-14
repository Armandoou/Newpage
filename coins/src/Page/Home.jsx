import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { useEffect } from 'react';
import CardActionArea from '@mui/material/CardActionArea';
import { Link } from 'react-router';


export default function Home() {
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Error en la respuesta de la API');
        }
        return response.json();
      })
      .then((data) => {
        setCoins(data);
        console.log(data);
      })
      .catch((error) => {
        console.log(error.message);
      })

  }, [])

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        {coins.map((coin) => (
          <Grid size={2} key={coin.id}>
            <Card >
              <CardActionArea sx={{ display: 'flex', justifyContent: 'space-between' }} component={Link} to={"/detail/"+coin.id}>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                  <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography component="div" variant="h5">
                      {coin.name}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      component="div"
                      sx={{ color: 'text.secondary' }}
                    >
                      {coin.symbol}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      component="div"
                      sx={{ color: 'green' }}
                    >
                      {coin.current_price} usd
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      component="div"
                      sx={{ color: 'red' }}
                    >
                      {coin.price_change_24h}
                    </Typography>
                  </CardContent>

                </Box>
                <CardMedia
                  component="img"
                  sx={{ width: 151 }}
                  image={coin.image}
                  alt="Live from space album cover"
                />
              </CardActionArea>
            </Card>
          </Grid>


        ))}

      </Grid>
    </Box>
  )
}
