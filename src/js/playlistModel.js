import React, { Component } from 'react';

export class PlaylistModel {
    constructor() 
    {
        this.playlistName = "MyPlaylist";
        this.numberOfSongs = 10;
        this.explicit = true;
        this.genres = [
            {
                id:"42402",
                value:0.5
            }
        ];
        this.currentSong = null;
        this.songs = [];
    }

    addGenre(radioID, value){
        if(value === 0){
            this.removeGenre(radioID);
            return;
        }
                
        this.genres = [...this.genres, {id:radioID}];
        this.genres.find(x => x.id === radioID).value = value;
        console.log(this.genres)

        // this.notifyObservers();
    }

    removeGenre(radioID){
        this.genres = this.genres.filter((genre) => genre.id !== radioID);
        this.notifyObservers();
    }

    currentNumberOfSongs(length){
        console.log(length)
        this.numberOfSongs.forEach(element => {
            if(length === element){
                this.numberOfSongs[element] = true;
            }else{
                this.numberOfSongs[element] = false;
            }
        });
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

    addSongsToPlaylist(arrayWithSongs){
       this.songs = this.songs.concat(arrayWithSongs);
    }

    addArtist(artist){
        this.artists = [...this.artists, artist];
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