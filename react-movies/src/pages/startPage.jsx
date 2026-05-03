import { Link } from "react-router";

const StartPage = () => {
  
    return(
        <>
            <p>
                Welcome to Media Hub!
            </p>
            <p>
                <Link to="/login">Login</Link> or <Link to="/signup">Signup</Link> to create favourite movies or add to your watchlist!
            </p>
        </>
    );
  };

export default StartPage;
