const axios = require("axios");
// import axios here

// Please note that it is normally not considered best practice to commit
// api keys to github as it presents a security risk. It is done here only
// for practice purposes as we are sharing the same account
const api_key = "d771b19ef336ed8381def3a60b574464";

const discoverMovie = () => {
  const url = `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}`;
  // code here
  return axios.get(url);
};

const getMovieById = (id) => {
  const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}`;
  // code here
  return axios.get(url).then((res) => res.data);
};

const getMovieByIdFailure = () => {
  const fakeId = 1; // FAKE ID HERE
  const url = `https://api.themoviedb.org/3/movie/${fakeId}?api_key=${api_key}`;
  // code here
  return axios
    .get(url)
    .then((res) => res)
    .catch(function (error) {
      let status = error.response.status;
      console.log(status);
      return status;
    });
};

module.exports = {
  discoverMovie,
  getMovieById,
  getMovieByIdFailure,
};
