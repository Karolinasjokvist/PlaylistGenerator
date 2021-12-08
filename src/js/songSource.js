import { BASE_URL, API_KEY } from './apiConfig';

export const SongSource = {   // JS object creation literal
    apiCall(params) {
        return fetch(BASE_URL + params, {
                "method": "GET",              // HTTP method
                "headers": {                  // HTTP headers
                    'x-rapidapi-host': 'deezerdevs-deezer.p.rapidapi.com',
                    'x-rapidapi-key': API_KEY
                }
            }).then(response => { if (response.status != 200) throw "error " + response.status; return response })

                // from HTTP response headers to HTTP response data
                .then(response => response.json());

    },   // comma between object entries

    getSongDetails(id) {
        return SongSource.apiCall('/track/' + id);
    },

    getArtistsFromGenre(id){
        return SongSource.apiCall("/genre/" + id + "/artists");
    },

    getSongsFromArtist(id){
        return SongSource.apiCall("/artist/"+ id + "/top");
    },

    searchSongs(params) {
        return SongSource.apiCall('/search/artist?q='
            + new URLSearchParams(params));
    }

};