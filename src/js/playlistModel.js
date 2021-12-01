export class PlaylistModel {
    constructor(playlistName = "MyPlaylist", numberOfSongs = [{10:"hej"},{20:false},{30:false}], explicit = true, genres = [], 
                artists = [], currentSong = null, songs = []) 
    {
        this.playlistName = playlistName;
        this.numberOfSongs = numberOfSongs;
        this.explicit = explicit;
        this.genres = genres;
        this.artists = artists;
        this.currentSong = currentSong;
        this.songs = songs;
    }

    addedGenre(genre){
        if(this.genres.some(g => g.id === genre)){
            return true;
        }
        return false;
    }

    addGenreToPlaylist(genre, amount){
        this.genres[genre] = amount;
    }

    setExplicit(choice){
        this.explicit = choice;
    }

    setPlaylistName(name){
        this.playlistName = name;
    }

    setCurrentSong(song){
        if(this.currentSong === song){
            return;
        }
        this.currentSong = song;
    }

    addSongToPlaylist(song){
       this.songs = [...this.songs, song]; 
    }

    addArtist(artist){
        this.artists = [...this.artists, artist];
    }




}