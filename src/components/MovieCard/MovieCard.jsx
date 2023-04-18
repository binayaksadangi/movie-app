import { Button, Card, CardActions, CardContent, CardMedia } from '@mui/material'
import React from 'react'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
const MovieCard = (props) => {
  const {id, movies} = props
  return (
    <Card sx={{ maxWidth: 200 }}>
      <CardMedia sx={{ height: 300  }} image={movies.image} />
      <CardContent>
        <p>{movies.rank}. {movies.title}</p>
       
      </CardContent>
      <CardActions>
        <Button variant='outlined' size='small' startIcon={<PlayArrowIcon/>}>Watch Trailer</Button>
      </CardActions>
    </Card>
  )
}

export default MovieCard