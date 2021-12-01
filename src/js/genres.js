import React, { Component } from 'react';
export class Genres{
    constructor(){
        this.list = [
            {
                id:"132",
                name:"Pop",
                img:"https://images.freeimages.com/images/large-previews/056/concert-1189401.jpg"
            },
            {
                id:"116",
                name:"Rap/HipHop",
                img:"https://images.freeimages.com/images/large-previews/61b/rip-the-mic-1-1502437.jpg"
            }
        ];
        
        this.currentGenre = null;
    }

    setCurrentGenre(id){
        this.currentGenre = id;
    }
}