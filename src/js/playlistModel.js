import React, { Component } from 'react';
class PlaylistModel {
    constructor() 
    {
        this.playlistName = "MyPlaylist";
        this.numberOfSongs = 0;
        this.explicit = false;
        this.genres = [];
        this.currentSong = null;
        this.songs = [];
        this.observers = [];
        this.total = 0;
    }

    addGenre(radioID, value){

        if(value == 0){
            console.log("remove")
            this.removeGenre(radioID);
            this.setTotalPercent();
            return;
        }
        if(this.genres.some(g => g.id === radioID)){
            this.genres.find(g => g.id === radioID).value = (value/100);
            this.setTotalPercent();
            return;
        }
                
        this.genres = [...this.genres, {id:radioID}];
        this.genres.find(x => x.id === radioID).value = (value/100);
        console.log(this.genres);
        this.setTotalPercent();
        console.log(this.total)


        this.notifyObservers();
    }

    removeGenre(radioID){
        this.genres = this.genres.filter((genre) => genre.id !== radioID);
        this.notifyObservers();
    }

    setTotalPercent(){
        let total = 0;
        this.genres.forEach(genre => {
            total += genre.value;
        });
        this.total = total;
        this.notifyObservers();
    }

    currentNumberOfSongs(length){
        this.numberOfSongs = length;
        console.log(this.numberOfSongs)
        this.notifyObservers();
    }

    setExplicit(choice){
        console.log(choice)
        this.explicit = choice;
        console.log(this.explicit);
        this.notifyObservers();
    }

    setPlaylistName(name){
        this.playlistName = name;
        this.notifyObservers();
    }

    setCurrentSong(song){
        if(this.currentSong === song){
            return;
        }
        this.currentSong = song;
        this.notifyObservers();
    }

    addSongsToPlaylist(arrayWithSongs){
       this.songs = this.songs.concat(arrayWithSongs);
       this.notifyObservers();
    }

    addArtist(artist){
        this.artists = [...this.artists, artist];
        this.notifyObservers();
    }

    addObserver(callback) {
        this.observers = [... this.observers, callback];
    }
    removeObserver(callback) {
        this.observers = this.observers.filter(obs => obs !== callback);
    }
    notifyObservers() {
        this.observers.forEach(cb => {
            try { cb() } catch (e) { console.log(e) }
        });
    }
}

export default PlaylistModel;