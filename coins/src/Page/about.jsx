import React, { useState } from 'react';
import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  Avatar,
  Button,
  Collapse,
  IconButton,
} from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

export default function About() {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => setExpanded((prev) => !prev);

  return (
    <Box
      sx={{
        minHeight: '100vh',
        bgcolor: '#f9fafc',
        py: 6,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Container maxWidth="md">
        
        <Box textAlign="center" mb={6}>
          <Avatar
            sx={{
              bgcolor: 'primary.main',
              width: 64,
              height: 64,
              margin: '0 auto',
              mb: 2,
            }}
          >
            <InfoIcon fontSize="large" />
          </Avatar>
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            Sobre Nosotros
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            Conoce más sobre nuestra página y cómo puedes explorar el mundo de las criptomonedas.
          </Typography>
        </Box>

        
        <Grid container spacing={3} justifyContent="center">
          
          <Grid item xs={12} sm={6} md={5}>
            <Card
              sx={{
                textAlign: 'center',
                p: 2,
                borderRadius: 3,
                boxShadow: 3,
                height: '100%',
                '&:hover': { boxShadow: 6, transform: 'translateY(-4px)' },
                transition: 'all 0.2s ease',
              }}
            >
              <Avatar sx={{ bgcolor: 'primary.main', mx: 'auto', mb: 2 }}>
                <InfoIcon />
              </Avatar>
              <CardContent>
                <Box display="flex" alignItems="center" justifyContent="center">
                  <Typography variant="h6" fontWeight="600" gutterBottom>
                    ¿Quiénes somos?
                  </Typography>
                  <IconButton onClick={toggleExpand}>
                    {expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                  </IconButton>
                </Box>

                <Typography variant="body2" color="text.secondary">
                  Somos una página que muestra información actualizada sobre distintas monedas digitales,
                  incluyendo su valor, cambio en 24 horas y estado en el mercado.
                </Typography>

                <Collapse in={expanded} timeout="auto" unmountOnExit>
                  <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                    Nuestra misión es ofrecer a los usuarios una plataforma confiable y fácil de usar
                    para seguir el mercado de criptomonedas en tiempo real. 
                    También proporcionamos herramientas de filtrado, ordenamiento y seguimiento de las monedas
                    más importantes, ayudando a los usuarios a tomar decisiones informadas.
                    Estamos comprometidos con la transparencia y la precisión de los datos, 
                    usando fuentes confiables como CoinGecko para mantener todo actualizado.
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                    Además, ofrecemos enlaces a plataformas externas donde los usuarios pueden aprender
                    más y realizar compras de criptomonedas de manera segura.
                  </Typography>
                </Collapse>
              </CardContent>
            </Card>
          </Grid>

          
          <Grid item xs={12} sm={6} md={5}>
            <Card
              sx={{
                textAlign: 'center',
                p: 2,
                borderRadius: 3,
                boxShadow: 3,
                height: '100%',
                '&:hover': { boxShadow: 6, transform: 'translateY(-4px)' },
                transition: 'all 0.2s ease',
              }}
            >
              <Avatar sx={{ bgcolor: 'success.main', mx: 'auto', mb: 2 }}>
                <MonetizationOnIcon />
              </Avatar>
              <CardContent>
                <Typography variant="h6" fontWeight="600" gutterBottom>
                  Comprar Bitcoin
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                  Puedes visitar CoinGecko para comprar Bitcoin y otras criptomonedas de forma segura.
                </Typography>
                <Button
                  variant="contained"
                  color="success"
                  href="https://www.coingecko.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ir a CoinGecko
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* Footer */}
        <Box textAlign="center" mt={6}>
          <Typography variant="body2" color="text.secondary">
            © {new Date().getFullYear()} CryptoTracker — Página informativa de criptomonedas.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}


