import React, { Component } from 'react';
import '../../css/generateStartView.css';

export function GenerateStartView(props) {

    function isClicked(length){
        if (props.model.numberOfSongs[length]){
            return "buttonRightClicked";
        }
        return "buttonRight";
    }

    return (
        <div>
            <div>
                <button className="buttonBack">←</button>
                <div className="textTop">
                    How many songs would you like in your playlist?
                </div>
            </div>
            <div className="menu">
                <div className="menuItem">
                    <button className="buttonLeft">
                        <p>Short<br></br>10 songs</p>
                    </button>
                </div>
                <div className="menuItem">
                    <button className="midButton">
                        <p>Medium<br></br>20 songs</p>
                    </button>
                </div>
                <div className="menuItem">
                    <button className={isClicked(30)} onClick={e => props.model.currentNumberOfSongs(30)}>
                        <p>Long<br></br>30 songs</p>
                    </button>
                </div>
            </div>
            <div>
                <div className="textBottom">
                    Allow explicit songs {' '}
                    <label className="switch">
                        <input type="checkbox"></input>
                        <span className="slider round"></span>
                    </label>
                </div>
                <button className="buttonNext">→</button>
            </div>
        </div>
    )
}