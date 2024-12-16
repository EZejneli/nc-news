import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box sx={{ py: 2, textAlign: 'center', backgroundColor: '#242424', color: '#fff' }}>
      <Typography variant="body2">
        &copy; 2024 NC News. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
