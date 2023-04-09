import { Box, Typography } from "@mui/material";
import React from "react";

const SectionContainer = ({ title, children ,id}) => {
  return (
    <Box id ={id} sx={{ my: 8 }}>
      <Typography variant="h4" align="center" mb={2}>
        {title}
      </Typography>
      {children}
    </Box>
  );
};

export default SectionContainer;
