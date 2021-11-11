import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

function valuetext(value) {
  return `${value}$`;
}

export default function RangeSlider({filterPriceSlider}) {
  const [value, setValue] = React.useState([0, 200]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    filterPriceSlider(newValue)
  };

  return (
    <Box sx={{ width: 300 }}>
      <div>
      <label color='#006064'>Filter by price:</label>
      <Slider max={200} min={0}
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
      </div>
    </Box>
  );
}
