import { BASE_URL, API_KEY } from './apiConfig';

export const SongSource = {   // JS object creation literal
    apiCall(params) {
        return console.log(BASE_URL + params),
            fetch(BASE_URL + params, {
                "method": "GET",              // HTTP method
                "headers": {                  // HTTP headers
                    'x-rapidapi-host': 'deezerdevs-deezer.p.rapidapi.com',
                    'x-rapidapi-key': '0e7a2419a6msh36d6be08a4acd94p1bf6b3jsndf277dade78a'
                }
            }).then(response => { if (response.status != 200) throw "error " + response.status; return response })

                // from HTTP response headers to HTTP response data
                .then(response => response.json());

    },   // comma between object entries
    
    searchSongs(params) {
        return this.apiCall('/infos')
            .then(data => { return data.results });
    },

    getSongDetails(id) {
        return SongSource.apiCall('/recipes/' + id + '/information')
    }
};