import React, {useState, useEffect} from 'react';
import {Page, Button, Banner} from '@shopify/polaris';
import {useDataProvider} from 'DataStore/DataProvider';
import MovieCard from "./common/movie-card";
import "./nomination-list.css";

export default function ResultsList() {
  const { nominationStore } = useDataProvider();
  const { nominations, setNominations } = nominationStore;

  const [isBannerDismissed, setBanner] = useState(false);

  useEffect(() => {
    if(isBannerDismissed && nominations.length < 5){
      setBanner(false);
    }
  }, [nominations]);

  const removeNomination = (movieId) => {
    const newNominationList = nominations.filter((movie) => !(movie.imdbID === movieId));

    setNominations([...newNominationList]);
  }

  const action = (movieId) => <Button destructive onClick={() => removeNomination(movieId)}>Remove</Button>;

  return(
    <div className="movie-list">
      <Page title="Your Nominations" separator>
          {!isBannerDismissed && nominations.length > 4 &&
          <div className="nomination-banner">
            <Banner
              title="You have Five Movies Nominated!"
              status="success"
              onDismiss={() => {setBanner(true)}}
            />
          </div>
          }
          {nominations &&
            nominations.map((movie)=> {
              return(
                <MovieCard key={movie.imdbDI} movie={movie} button={action(movie.imdbID)}></MovieCard>
              );
            })
          }
      </Page>
    </div>
  );
}
