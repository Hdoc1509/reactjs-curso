export const HEROKU_CORS = "https://cors-anywhere.herokuapp.com/";

export const THE_AUDIODB_API_URL =
  "https://www.theaudiodb.com/api/v1/json/2/search.php";

export const MUSIXMATCH_API_URL = "https://api.musixmatch.com/ws/1.1";
export const MUSIXMATCH_API_CORS_URL = `${HEROKU_CORS}${MUSIXMATCH_API_URL}`;

export const LASTFM_API_URL = 'http://ws.audioscrobbler.com/2.0'

export const SOMERANDOMAPI_URL = 'https://some-random-api.ml'

export const SPOTIFY_API_URL = 'https://api.spotify.com/v1'
export const SPOTIFY_API_FREE_TOKEN_URL = 'https://open.spotify.com/get_access_token?reason=transport&productType=web_player'
export const SPOTIFY_API_FREE_TOKEN_CORS_URL = `${HEROKU_CORS}${SPOTIFY_API_FREE_TOKEN_URL}`
