import { useContext, useState } from "react";
import { Navigate } from "react-router";
import { AuthContext } from '../contexts/authContext';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const SignUpPage = () => {
  const context = useContext(AuthContext)
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordAgain, setPasswordAgain] = useState("");
  const [registered, setRegistered] = useState(false);
  
  const register = async () => {
    let passwordRegEx = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    const validPassword = passwordRegEx.test(password);

    if (validPassword && password === passwordAgain) {
      let result = await context.register(userName, password);
      setRegistered(result);
    }
  }

  if (registered === true) {
    return <Navigate to="/login" />;
  }

  return (
    <Box sx={{
            paddingTop: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
    }}>
      <Typography variant="h4">Sign Up</Typography>
      <Typography variant="body1" sx={{maxWidth: "800px"}}>You must register a username and password to log in. Usernames must be unique and passwords must contain a minimum of 8 characters (with at least one uppercase letter, one lowercase letter, and one symbol). </Typography>
      < br />
      <input value={userName} placeholder="user name" onChange={e => {
        setUserName(e.target.value);
      }}></input><br />
      <input value={password} type="password" placeholder="password" onChange={e => {
        setPassword(e.target.value);
      }}></input><br />
      <input value={passwordAgain} type="password" placeholder="password again" onChange={e => {
        setPasswordAgain(e.target.value);
      }}></input><br />
      {/* Login web form  */}
      <Button variant="contained" size="medium" color="secondary" onClick={register}>Register</Button>
    </Box>
  );
};

export default SignUpPage;
