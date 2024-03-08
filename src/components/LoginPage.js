// import React from "react";
// import TextField from "@mui/material/TextField";
// import { Container, Typography } from "@mui/material";
// import { NavLink, Route } from "react-router-dom";
// import Button from "@mui/material/Button";
// import Link from "@mui/material";
// import RegisterPage from "./RegisterPage";
// function LoginPage() {
//   function handleSubmit(e) {
//     e.preventDefault();
//     const { username, password } = [e.target.email, e.target.password];
//     alert(`logged in!  ${username} and ${password}`);
//   }
//   return (
//     <form onSubmit={(e) => handleSubmit(e)}>
//       <Container
//         style={{
//           height: "300px",
//           width: "600px",
//           display: "flex",
//           justifyItems: "center",
//           alignItems: "center",
//           flexDirection: "column",
//           border: "1px solid #bdbdbd",
//           justifyContent: "space-evenly",
//           backgroundColor: "#eeeeee",
//           marginTop: "100px",
//           borderRadius: "15px",
//         }}
//       >
//         <Typography variant="h4">Login!</Typography>
//         <TextField
//           id="email"
//           label="Email"
//           variant="outlined"
//           className="register-email"
//           style={{
//             width: "500px",
//           }}
//           type="email"
//         />
//         <TextField
//           id="password"
//           label="Password"
//           variant="outlined"
//           className="register-password"
//           type="password"
//           style={{
//             width: "500px",
//           }}
//         />
//         <div
//           style={{
//             width: "100%",
//             display: "flex",
//             justifyContent: "center",
//             gap: "30px",
//           }}
//         >
//           <Button
//             type="submit"
//             variant="contained"
//             style={{
//               width: "120px",
//             }}
//           >
//             Login
//           </Button>
//           <NavLink to="/register">forgot password? Register here</NavLink>
//         </div>
//       </Container>
//     </form>
//   );
// }

// export default LoginPage;
import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState } from "react";
import { NavLink } from "react-router-dom";
function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(email);
    console.log(password);
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              onClick={handleSubmit}
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <NavLink to="/register" variant="body2">
                  {"Don't have an account? Sign Up"}
                </NavLink>
                {/* <NavLink to="/register">forgot password? Register here</NavLink> */}
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}
