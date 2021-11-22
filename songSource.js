const SongSource = {   // JS object creation literal
    apiCall(params) {
        return fetch(BASE_URL + params, {
            "method": "GET",
            "headers": {
                'x-rapidapi-host': 'genius.p.rapidapi.com',
                'x-rapidapi-key': API_KEY
            }
        }).then(response => {
            console.log(response);
        })
            .catch(err => {
                console.error(err);
            });
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