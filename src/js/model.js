import React, { Component } from 'react';
import  SongSource  from './songSource';
class Model{
    constructor(){
        this.currentGenre = "152";
        this.observers = [];
    }

    setCurrentGenre(id){
        this.currentGenre = id;
        this.currentGenreArtists = null;
        this.currentGenreError = null;
        this.notifyObservers();

        // if (this.currentGenre) {
            // SongSource.getArtistsFromGenre(this.currentGenre)
                // .then(data => {
                    // if(this.currentGenre === id){
                        // this.currentGenreArtists = data
                        // this.notifyObservers()
                    // }
                // })
                // .catch(error => {
                    // if(this.currentGenre === id){
                        // this.currentGenreError = error
                        // this.notifyObservers()
                    // }
                // });
        // }
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

export default Model;