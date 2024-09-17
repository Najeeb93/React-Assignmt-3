import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import UseEffect from "./assets/UseEffect";
import { Box, Typography, Button, TextField } from "@mui/material";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { SearchOutlined } from "@mui/icons-material";

function App() {
  return (
    <div className="container mx-auto">
      <Box
        display={"flex"}
        flexDirection={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
        bgcolor={"orange"}
        padding={1}
        color={"white"}
        marginTop={1}
        marginBottom={1}
        borderRadius={3}
      >
        <Typography
          variant="h5"
          fontWeight={"medium"}
          sx={{ textDecoration: "underline" }}
        >
          Image Gallery
        </Typography>
        <Button
          variant="outlined"
          color="white"
          endIcon={<AccountCircleOutlinedIcon />}
        >
          Login
        </Button>
      </Box>
      <Box display={"flex"} gap={2} justifyContent={"space-between"}>
        <TextField
          id="outlined-basic"
          label="Search Your Images"
          fullWidth
          variant="outlined"
        />
        <Button
          variant="outlined"
          color="primary"
          startIcon={<SearchOutlined />}
        >
          Search
        </Button>
      </Box>
    </div>
  );
}

export default App;
