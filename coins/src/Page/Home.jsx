import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import { Link } from 'react-router';
import DrawerA from '../Components/DrawerA';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

export default function Home() {
  const [coins, setCoins] = useState([]);
  const [sortedCoins, setSortedCoins] = useState([]);
  const [limit, setLimit] = useState(100);

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
        setSortedCoins(data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  
  const handleSortChange = (order) => {
    const sorted = [...coins].sort((a, b) =>
      order === 'asc'
        ? a.current_price - b.current_price
        : b.current_price - a.current_price
    );
    setSortedCoins(sorted);
  };

  const handleLimitChange = (newLimit) => {
    setLimit(newLimit);
  };

  
  const formatNumber = (num, minFrac = 2, maxFrac = 8) => {
    if (num === null || num === undefined || Number.isNaN(Number(num))) return '-';
    return Number(num).toLocaleString(undefined, {
      minimumFractionDigits: minFrac,
      maximumFractionDigits: maxFrac,
    });
  };

  return (
    <Box sx={{ display: 'flex' }}>
     
      <DrawerA onSortChange={handleSortChange} onLimitChange={handleLimitChange} />

      
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Grid container spacing={2}>
          {sortedCoins.slice(0, limit).map((coin) => {

            const change24 = coin.price_change_24h;
            const changePct24 = coin.price_change_percentage_24h;
            const isPositive = change24 >= 0;

            const changeColor = isPositive ? 'green' : 'red';
            const ArrowIcon = isPositive ? ArrowUpwardIcon : ArrowDownwardIcon;

            return (
              <Grid item xs={12} sm={6} md={4} lg={3} key={coin.id}>
                <Card>
                  <CardActionArea
                    sx={{ display: 'flex', justifyContent: 'space-between' }}
                    component={Link}
                    to={`/detail/${coin.id}`}
                  >
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
                          {coin.symbol.toUpperCase()}
                        </Typography>

                        
                        <Typography variant="subtitle1" component="div" sx={{ fontWeight: '600' }}>
                          {formatNumber(coin.current_price, 2, 8)} USD
                        </Typography>

                        
                        <Box sx={{ display: 'flex', alignItems: 'center', mt: 0.5 }}>
                          <ArrowIcon sx={{ color: changeColor, fontSize: 18, mr: 0.5 }} />
                          <Typography
                            variant="subtitle2"
                            component="div"
                            sx={{ color: changeColor, fontWeight: 'bold' }}
                          >
                            {change24 === null || change24 === undefined ? '-' : (change24 >= 0 ? '+' : '') + formatNumber(change24, 2, 8)}
                          </Typography>

                          
                          <Typography variant="caption" component="div" sx={{ ml: 1, color: changeColor }}>
                            {changePct24 === null || changePct24 === undefined ? '' : `(${changePct24 >= 0 ? '+' : ''}${Number(changePct24).toFixed(2)}%)`}
                          </Typography>
                        </Box>
                      </CardContent>
                    </Box>

                    <CardMedia
                      component="img"
                      sx={{ width: 151 }}
                      image={coin.image}
                      alt={coin.name}
                    />
                  </CardActionArea>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </Box>
  );
}



