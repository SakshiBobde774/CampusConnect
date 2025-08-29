import React, { useState } from "react";
import { TextField, Button, Typography, Box, Container, Link } from "@mui/material";
import axios from "axios";
import { useNavigate, Link as RouterLink } from "react-router-dom"; // Import Link as RouterLink

export default function Signup() {
  const [form, setForm] = useState({ name: "", email: "", password: "", college: "", branch: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSignup = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await axios.post("http://localhost:5000/api/auth/signup", form);
      navigate("/");
    } catch (err) {
      setError(err.response?.data?.message || "Signup failed");
    }
  };

  return (
    // Container centers the content horizontally and sets a max-width
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center', // Centers children horizontally (like the title)
        }}
      >
        <Typography component="h1" variant="h4">
          Sign Up
        </Typography>
        <Box component="form" onSubmit={handleSignup} sx={{ mt: 3, width: '100%' }}>
          <TextField label="Name" name="name" fullWidth margin="normal" value={form.name} onChange={handleChange} required />
          <TextField label="Email" name="email" fullWidth margin="normal" value={form.email} onChange={handleChange} required />
          <TextField label="Password" name="password" type="password" fullWidth margin="normal" value={form.password} onChange={handleChange} required />
          <TextField label="College" name="college" fullWidth margin="normal" value={form.college} onChange={handleChange} />
          <TextField label="Branch" name="branch" fullWidth margin="normal" value={form.branch} onChange={handleChange} />
          {error && (
            <Typography color="error" align="center" sx={{ mt: 1 }}>
              {error}
            </Typography>
          )}
          <Button type="submit" fullWidth variant="contained" color="primary" sx={{ mt: 3, mb: 2 }}>
            Sign Up
          </Button>
          <Typography align="center">
            Already have an account?{" "}
            {/* Use RouterLink for SPA navigation without a page refresh */}
            <Link component={RouterLink} to="/login" variant="body2">
              Login
            </Link>
          </Typography>
        </Box>
      </Box>
    </Container>
  );
}