import React, { useEffect, useState } from 'react';
import Grid from "@material-ui/core/Grid";
import Paper from '@material-ui/core//Paper';
import './App.css';

function App() {
  const [movies, setMovies] = useState()
  useEffect(() => {
    fetch('http://localhost:4000/movies/get_movies')
      .then(async (response) => {

        var dat = await response.json();
        console.log(dat)
        setMovies(dat)
      })

  }, [])

  return (
    <div className="Appcenter">
      <Grid xs={12}>
         <h1>Movies</h1>
      </Grid>
      <Grid container spacing={2} style={{paddingTop:"25px"}}>
      {!movies ? [] : movies.map((e, i) => {
        return(

        <Grid xs={12} sm={6} md={3} lg={4} style={{}}>
          <Paper style={{padding: "20px",textAlign: 'center',margin:"15px"}}>
          <h3>{e.name}</h3>
          <p>Rating = {e.rating}/5</p>
          <p>Releas Date = {e.release_date}</p>
          </Paper>
        </Grid>
        
        )
      })}
      </Grid>
    </div>
  );
}

export default App;
