import { Avatar, Box, Typography, useTheme } from "@mui/material";
import React from "react";

const CardTestimonial = ({witness}) => {
  const theme= useTheme()
  return (
    <Box
      sx={{
        margin: "10px auto",
        padding: "30px",
        maxWidth: "330px",
        mixHeight: "300px",
        color: "black" ,
        backgroundColor: "#CFCFCF",
        borderRadius: "30px",
        display: "flex", flexDirection: "column" ,
      }}
    >
     <Box sx={{ mb:'20px', display: "flex", justifyContent: "space-evenly" ,alignItems:'center' }}>
        <Avatar alt=""  src={witness.img}  />
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Typography  variant="h6">{witness.name}</Typography>
          <Typography variant="body2">{witness.job}</Typography>
        </Box>
      </Box>

      <Typography variant="body1" >
      {witness.content}
      </Typography>
     
    </Box>
  );
};

export default CardTestimonial;
