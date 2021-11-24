const SongSource = {   // JS object creation literal
    apiCall(params) {
        return fetch(BASE_URL + params, {
            "method": "GET",
            "headers": {
                'x-rapidapi-host': 'deezerdevs-deezer.p.rapidapi.com',
                'x-rapidapi-key': API_KEY
            }
        }).then(response => { if (response.status != 200) throw "error " + response.status; return response })

        // from HTTP response headers to HTTP response data
        .then(response => response.json());
    }
    ,   // comma between object entries
    searchSongs(params) {
        return SongSource.apiCall('/artists/' + params + '/songs?'
            + new URLSearchParams(params))
            .then(data => { return data.results });
    },

    getSongDetails(id) {
        return SongSource.apiCall('/recipes/' + id + '/information')
    }
};