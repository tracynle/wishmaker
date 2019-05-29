let axios = require("axios");

// The getResults method retrieves Results from the Etsy server
// It accepts a "query" or term to search the result api for

// ----------- Etsy Listings --------
const baseListingUrl = "https://openapi.etsy.com/v2/listings/active?limit=9&offset=0";
const APIKEY = "api_key=" + process.env.APIKEY;

// ----------- Etsy Images -----------
const baseImageUrl = "https://openapi.etsy.com/v2/listings/"


let exportStuff = {
  search: function(query) {
    return axios.get(baseListingUrl + "&tags=" + query + "&" + APIKEY);
  },
  images: function(query) {
    return axios.get(baseImageUrl + query + "/images?limit=12&offset=0&" + APIKEY);
  }
};

module.exports = exportStuff;


