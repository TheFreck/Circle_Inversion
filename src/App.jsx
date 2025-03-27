import { Container } from '@mui/material';
import Home from './components/Home'
import Home3d from './components3d/Home3d';
import { DimensionToggle } from './DimensionToggle';
import { useState } from 'react';

export const App = () => {
  const [dimensions,setDimensions] = useState(false);

  return (<Container
    sx={{
      display: "flex"
    }}
  >
    <DimensionToggle 
      dimensions={dimensions}
      setDimensions={setDimensions}
    />
    {
      dimensions &&
      <Home3d /> 
    }
    {
      !dimensions &&
      <Home />
    }
  </Container>)
}

export default App
