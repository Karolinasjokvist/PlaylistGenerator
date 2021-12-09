import React, { Component } from 'react';

export class PlaylistModel {
    constructor() 
    {
        this.playlistName = "MyPlaylist";
        this.numberOfSongs = null;
        this.explicit = false;
        this.genres = [];
        this.currentSong = null;;
        this.songs = [];
    }

    addGenre(genreID, value){
        if(value === 0){
            this.removeGenre(genreID);
            return;
        }
                
        this.genres = [...this.genres, genreID];
        this.genres.find(x => x === genreID).value = value;

        this.notifyObservers();
    }

    removeGenre(genreID){
        this.genres = this.genres.filter((genre) => genre.id !== genreID);
        this.notifyObservers();
    }

    currentNumberOfSongs(length){
        console.log(length)
        this.numberOfSongs = length;
        console.log(length)
    }

    addGenreToPlaylist(genre, amount){
        this.genres[genre] = amount;
    }

    setExplicit(choice){
        console.log(choice)
        this.explicit = choice;
        console.log(this.explicit)
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