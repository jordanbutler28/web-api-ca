import React from "react";
import { getMovieCredits } from "../../api/tmdb-api";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Paper from '@mui/material/Paper';
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import Stack from '@mui/material/Stack';


export default function MovieCastCard({ credits }) {
    
    return ( 
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Paper variant="elevation" square= "false" 
                    sx={{ 
                        minWidth: 300,
                        height: 100,
                        padding: 2,
                        display: 'flex', 
                        alignItems: 'center'
                        }}>
                    <Stack direction="row" spacing={2} alignItems="center">
                        <Avatar src={`https://image.tmdb.org/t/p/w500${credits.profile_path}`} sx={{ width: 95, height: 95}}></Avatar>
                        <Stack>
                            <Typography variant="h6">{credits.name}</Typography>
                            <Typography>{credits.character}</Typography>
                        </Stack>
                    </Stack>
                </Paper>
            </Grid>
        </Grid>

    );
}

