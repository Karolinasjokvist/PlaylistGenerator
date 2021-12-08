import React, { Component } from 'react';
import SongSource from './songSource';
class Model {
    constructor() {
        this.currentGenre = "152";
        this.observers = [];
        this.artists = [];
        this.genreList = [
        {
            id: "132",
            name: "Pop",
            img: "https://images.freeimages.com/images/large-previews/056/concert-1189401.jpg"
        },
        {
            id: "116",
            name: "Rap/HipHop",
            img: "https://images.freeimages.com/images/large-previews/61b/rip-the-mic-1-1502437.jpg"
        },
        {
            id: "113",
            name: "Dance",
            img: "https://images.freeimages.com/images/large-previews/7ef/laser-effects-in-the-hague-1190079.jpg"
        },
        {
            id: "165",
            name: "R&B",
            img: "https://images.freeimages.com/images/large-previews/c76/late-night-1550537.jpg"
        },
        {
            id: "106",
            name: "Electro",
            img: "https://images.freeimages.com/images/large-previews/733/dj-dancing-1462436.jpg"
        },
        {
            id: "144",
            name: "Reggae",
            img: "https://images.freeimages.com/images/large-previews/71c/bobby-1427554.jpg"
        },
        {
            id: "129",
            name: "Jazz",
            img: "https://images.freeimages.com/images/large-previews/946/sax-player-1254283.jpg"
        },
        {
            id: "464",
            name: "Metal",
            img: "https://images.freeimages.com/images/large-previews/42d/angel-drummer-1559333.jpg"
        },
        {
            id: "169",
            name: "Soul and Funk",
            img: "https://images.freeimages.com/images/large-previews/253/con-alma-de-guitarra-ii-1427669.jpg"
        },
        {
            id: "152",
            name: "Rock",
            img: "https://images.freeimages.com/images/large-previews/996/he-who-rocks-hardest-4-series-1466876.jpg"
        }
        ];
    }

    setCurrentGenre(id) {
        this.currentGenre = id;
        this.currentGenreArtists = null;
        this.currentGenreError = null;
        this.notifyObservers();
    }

    getGenreName(id){
        return this.genreList.find(x => x.id === id).name;
    }

    addToList(artist){
        if(this.artists.some(a => a.id === artist.id)){
            return;
        }
        
        this.artists = [...this.artists, artist];
        this.notifyObservers();
    }

    removeFromList(artistData){
        // if (!this.addedToMenu(dishData)) {
            // return;
        // }
        this.artists = this.artists.filter((artist) => artist.id !== artistData);
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

export default Model;