import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Slider from '@mui/material/Slider';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const drawerWidth = 240;

export default function DrawerA({ onSortChange, onLimitChange }) {
  const [limit, setLimit] = React.useState(100);
  const [open, setOpen] = React.useState(false); 

  const handleSliderChange = (e, newValue) => {
    setLimit(newValue);
    onLimitChange(newValue);
  };

  const handleInputChange = (e) => {
    const value = e.target.value === '' ? '' : Number(e.target.value);
    setLimit(value);
    if (!isNaN(value) && value > 0) {
      onLimitChange(value);
    }
  };

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />

      
      <Button variant="contained" onClick={toggleDrawer} sx={{ position: 'fixed', top: 16, right: 16, zIndex: 1300 }}>
        {open ? 'Ocultar Opciones' : 'Mostrar Opciones'}
      </Button>

      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            p: 2,
          },
        }}
        variant="temporary" 
        anchor="right"
        open={open} 
        onClose={toggleDrawer} 
      >
        <Toolbar />
        <Typography variant="h6" sx={{ mb: 2 }}>
          Opciones
        </Typography>
        <Divider />

        <List>
          <ListItem disablePadding>
            <ListItemButton onClick={() => onSortChange('asc')}>
              <ListItemText primary="Ascendente" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={() => onSortChange('desc')}>
              <ListItemText primary="Descendente" />
            </ListItemButton>
          </ListItem>
        </List>

        <Divider sx={{ my: 2 }} />

        <Typography gutterBottom>Límite: {limit}</Typography>

        <Slider
          value={typeof limit === 'number' ? limit : 0}
          onChange={handleSliderChange}
          aria-labelledby="limit-slider"
          step={1}
          marks
          min={1}
          max={100}
          valueLabelDisplay="auto"
        />

        <TextField
          label="Ingresar límite"
          type="number"
          variant="outlined"
          size="small"
          value={limit}
          onChange={handleInputChange}
          inputProps={{ min: 1, style: { textAlign: 'center' } }}
          sx={{ mt: 2, width: '100%' }}
        />

        <Typography variant="body2" sx={{ mt: 2 }}>
          Muestra solo las primeras {limit} monedas.
        </Typography>
      </Drawer>
    </Box>
  );
}


