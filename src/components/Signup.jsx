import React, { useState } from "react";
import { TextField, Button, Typography, Box, Link } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [form, setForm] = useState({ name: "", email: "", password: "", college: "", branch: ""});
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
    <Box mt={8}>
      <Typography variant="h4" align="center" gutterBottom>Sign Up</Typography>
      <form onSubmit={handleSignup}>
        <TextField label="Name" name="name" fullWidth margin="normal" value={form.name} onChange={handleChange} required />
        <TextField label="Email" name="email" fullWidth margin="normal" value={form.email} onChange={handleChange} required />
        <TextField label="Password" name="password" type="password" fullWidth margin="normal" value={form.password} onChange={handleChange} required />
        <TextField label="College" name="college" fullWidth margin="normal" value={form.college} onChange={handleChange} />
        <TextField label="Branch" name="branch" fullWidth margin="normal" value={form.branch} onChange={handleChange} />
        {error && <Typography color="error">{error}</Typography>}
        <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>Sign Up</Button>
      </form>
      <Typography align="center" sx={{ mt: 2 }}>
        Already have an account? <Link href="/login">Login</Link>
      </Typography>
    </Box>
  );
}