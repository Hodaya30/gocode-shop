
import * as React from 'react';
import Slider, { SliderThumb } from '@mui/material/Slider';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';



const AirbnbSlider = styled(Slider)(({ theme }) => ({
  color: '#3a8589',
  height: 3,
  padding: '13px 0',
  '& .MuiSlider-thumb': {
    height: 27,
    width: 27,
    backgroundColor: '#fff',
    border: '1px solid currentColor',
    '&:hover': {
      boxShadow: '0 0 0 8px rgba(58, 133, 137, 0.16)',
    },
    '& .airbnb-bar': {
      height: 9,
      width: 1,
      backgroundColor: 'currentColor',
      marginLeft: 1,
      marginRight: 1,
    },
  },
  '& .MuiSlider-track': {
    height: 3,
  },
  '& .MuiSlider-rail': {
    color: theme.palette.mode === 'dark' ? '#bfbfbf' : '#d8d8d8',
    opacity: theme.palette.mode === 'dark' ? undefined : 1,
    height: 3,
  },
}));


function valuetext(value) {
  return `${value}$`;
}
function AirbnbThumbComponent(props) {
  const { children, ...other } = props;
  return (
    <SliderThumb {...other}>
      {children}
      <span className="airbnb-bar" />
      <span className="airbnb-bar" />
      <span className="airbnb-bar" />
    </SliderThumb>
  );
}

export default function RangeSlider({filterPriceSlider}) {
  const [value, setValue] = React.useState([0, 1000]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    filterPriceSlider(newValue)
  };

  return (
  
    <Box sx={{ width: 320 }}>
      <Typography gutterBottom color='#006064'> Filter by price:</Typography>
      <AirbnbSlider
        components={{ Thumb: AirbnbThumbComponent }}
        max={1000} min={0}
        getAriaLabel={() => 'Price range'}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        sx={{
          width: 300,
          color: '#006064'
        }}
      />
    </Box>
  );
}




















































