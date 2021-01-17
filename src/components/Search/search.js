import axios from "axios";

const APIKEY = "1ae68295";

export default async function requestSearch(search) {
  try{
    const movies = await axios.get(`http://www.omdbapi.com/?s=${search}&apikey=${APIKEY}`);
    return movies;
  }catch(e){
    console.log("error retreiving info ", e);
  }
}