import React from 'react';
import {Page, Button} from '@shopify/polaris';
import {useDataProvider} from 'DataStore/DataProvider';
import MovieCard from "./common/movie-card";


export default function ResultsList() {

  const { nominationStore } = useDataProvider();
  const { nominations, setNominations } = nominationStore;

  const removeNomination = (movieId) => {
    const newNominationList = nominations.filter((movie) => !(movie.imdbID === movieId));

    setNominations([...newNominationList]);
  }

  const action = (movieId) => <Button destructive onClick={() => removeNomination(movieId)}>Remove</Button>;

  return(
    <Page title="Your Nominations" separator>
        {nominations &&
          nominations.map((movie)=> {
            return(
              <MovieCard key={movie.imdbDI} movie={movie} button={action(movie.imdbID)}></MovieCard>
            );
          })
        }
    </Page>
  );
}
