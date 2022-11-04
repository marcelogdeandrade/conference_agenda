import React from 'react';
import Box from '@mui/material/Box';
import Events from './Events'
import Navigation from './Navigation'

function App() {
  return (
    <Box sx={{ width: '100%' }}>
      <Events />
      <Navigation />
    </Box>
  );
}

export default App;
