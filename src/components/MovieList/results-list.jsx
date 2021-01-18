import React from 'react';
import {Page, Button} from '@shopify/polaris';
import {useDataProvider} from 'DataStore/DataProvider';
import MovieCard from "./common/movie-card";


export default function ResultsList() {

  const { searchStore, nominationStore } = useDataProvider();
  const { search, results } = searchStore;
  const { nominations, setNominations } = nominationStore;

  const nominateMovie = (movie) => {
    setNominations([...nominations, movie])
  }

  const isNominated = (movieId) => {
    const findMovie = nominations.find((movie) => movie.imdbID == movieId);

    return findMovie;
  }

  const action = (movieId, movie) => <Button disabled={isNominated(movieId)} primary onClick={() => nominateMovie(movie)}>Nominate</Button>;

  return(
    <div className="movie-list">
      <Page title={`Search results for: ${search}`} separator>
        {results &&
          results.map((movie)=> {
            return(
              <MovieCard key={movie.imdbID} movie={movie} button={action(movie.imdbID, movie)}></MovieCard>
            );
          })
        }
      </Page>
    </div>
  );
}
