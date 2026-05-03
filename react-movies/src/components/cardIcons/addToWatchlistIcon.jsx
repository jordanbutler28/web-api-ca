import React, { useContext, useState } from "react";
import { MoviesContext } from "../../contexts/moviesContext";
import IconButton from "@mui/material/IconButton";
import PlaylistIcon from '@mui/icons-material/PlaylistAdd';
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import CheckIcon from '@mui/icons-material/CheckCircle';

const AddToWatchlistIcon = ({ movie }) => {
  const context = useContext(MoviesContext);
  const [showAlert, setShowAlert] = useState(false);

  const handleAddToWatchlist = (e) => {
    e.preventDefault();
    context.addToWatchlist(movie);
    setShowAlert(true);
  };

  return (
    <IconButton aria-label="add to watchlist" onClick={handleAddToWatchlist}>
      <PlaylistIcon color="primary" fontSize="large" />
      
      <Snackbar open={showAlert} autoHideDuration={3000} onClose={() => setShowAlert(false)} anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}>
        <Alert
          icon={<CheckIcon fontSize="inherit" />}
          severity="success"
          variant="filled"
          sx={{ width: '100%' }}
        >
          Movie added to watchlist! 
        </Alert>
      </Snackbar>
    </IconButton>
  );
};

export default AddToWatchlistIcon;
