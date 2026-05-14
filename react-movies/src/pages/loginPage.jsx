import { useContext, useState } from "react";
import { Navigate, useLocation } from "react-router";
import { AuthContext } from '../contexts/authContext';
import { Link } from "react-router";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";


const LoginPage = () => {
    const context = useContext(AuthContext);

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const login = () => {
        context.authenticate(userName, password);
    };

    let location = useLocation();

    // Set 'from' to path where browser is redirected after a successful login - either / or the protected path user requested
    const { from } = location.state ? { from: location.state.from.pathname } : { from: "/home" };

    if (context.isAuthenticated === true) {
        return <Navigate to={from} />;
    }

    return (
        <Box sx={{
            paddingTop: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
        }}>
            <Typography variant="h4">Login</Typography>
            <Typography variant="h5">You must log in to view the protected pages </Typography>
            <br />
            <input id="username" placeholder="username" onChange={e => {
                setUserName(e.target.value);
            }}></input><br />
            <input id="password" type="password" placeholder="password" onChange={e => {
                setPassword(e.target.value);
            }}></input><br />
            {/* Login web form  */}
            <Button variant="contained" size="medium" color="secondary" onClick={login}>Log in</Button>
            <p>Not Registered?
                <Link to="/signup"> Sign Up! </Link></p>
        </Box>
    );
};

export default LoginPage;
