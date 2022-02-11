// Axios is a popular NPM package used for preforming API requests
import axios from 'axios';

// const { REACT_APP_BASEURL, REACT_APP_APIKEY } = process.env;

// Using axios, we create a search method that is specific to our use case and export it at the bottom
const search = () =>
  axios.get({
    url: '/',
    method: 'get',
    baseURL: `https://upenn-cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=philadelpia`,
    headers: {'Authorization':'Bearer z0VKGJ5saPw9o4NFOXM0ltn74MlNL-ImY3NuRwKqHSBzlro8-FDROabYZfAYjy60-7y8RngCZo3O84AfF9TTLqmlz6geb3b3jG1K3IxXFeAXCfS4QDpDPqpTVaYBYnYx'}
  })
  .then(response => {
    console.log(response.data);
  })
  .catch((err) => {
    console.error("Error response:");
    console.error(err.response.data);    // ***
    console.error(err.response.status);  // ***
    console.error(err.response.headers); // ***
 });
  // axios.get(`https://upenn-cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=philadelpia`);

// Export an object with a "search" method that searches the Giphy API for the passed query
export default search;
