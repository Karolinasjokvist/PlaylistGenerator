import React, { Component } from 'react';
class Model{
    constructor(){
        this.currentGenre = null;

    }

    setCurrentGenre(id){
        this.currentGenre = id;
    }
}

export default Model;