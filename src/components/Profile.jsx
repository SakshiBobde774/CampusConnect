import React from "react";
import { Typography, Box, Avatar, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/");
  };

  if (!user) return <Typography>Not logged in</Typography>;

  return (
    <Box mt={8} textAlign="center">
      <Avatar sx={{ width: 80, height: 80, margin: "auto", mb: 2 }}>
        {user.name?.charAt(0)}
      </Avatar>
      <Typography variant="h5">{user.name}</Typography>
      <Typography>Email: {user.email}</Typography>
      <Typography>College: {user.college}</Typography>
      <Typography>Branch: {user.branch}</Typography>
      <Typography>Year: {user.year}</Typography>
      <Button variant="contained" color="secondary" sx={{ mt: 3 }} onClick={handleLogout}>
        Logout
      </Button>
    </Box>
  );
}