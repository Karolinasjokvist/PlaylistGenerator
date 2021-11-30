import {BASE_URL,API_KEY} from './apiConfig';

export const SongSource = {   // JS object creation literal
    apiCall(params) {
        return console.log(BASE_URL + params),
        fetch(BASE_URL + params).then(response => { if (response.status != 200) throw "error " + response.status; return response })

        // from HTTP response headers to HTTP response data
        .then(response => response.json());
        
    }
    ,   // comma between object entries
    searchSongs(params) {
        return this.apiCall('/album/' + params)
            .then(data => { return data.results });
    },

    getSongDetails(id) {
        return SongSource.apiCall('/recipes/' + id + '/information')
    }
};