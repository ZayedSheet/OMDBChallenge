import React from 'react';
import {Card} from '@shopify/polaris';
import "./movie-card.css";

export default function MovieList(props) {
  const {movie, button} = props
  const {Title, Year, Poster} = movie;

  return (
    <Card>
      <div className="card-content">
        <div className="card-image">
          <img src={Poster} alt="Movie Poster"/>
        </div>
        <div className="card-text">
          <h1 className="card-title">{Title}</h1>
          <p>{Year}</p>
        </div>
        {button}
      </div>
    </Card>
  );
}
