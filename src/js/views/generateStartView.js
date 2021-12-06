import React, { Component } from 'react';
import '../../css/generateStartView.css';

export function GenerateStartView(props) {

    // function isClicked(length){
    //     if (props.numberOfSongs[length]){
    //         return "buttonRightClicked";
    //     }
    //     return "buttonRight";
    // }

    return (
        <div className>
            <div>
                <button className="buttonBackG" onClick ={e => {window.location.hash = "#start"}}>←</button>
                <div className="textTopG">
                    How many songs would you like in your playlist?
                </div>
            </div>
            <div className="menuG">
                <div className="menuItemG">
                    <button className="buttonLeftG">
                        <p>Short<br></br>10 songs</p>
                    </button>
                </div>
                <div className="menuItemG">
                    <button className="midButtonG">
                        <p>Medium<br></br>20 songs</p>
                    </button>
                </div>
                <div className="menuItemG">
                    <button className="buttonRightG">
                        <p>Long<br></br>30 songs</p>
                    </button>
                </div>
            </div>

            <div>
                <div className="textBottomG">
                    Allow explicit songs {' '}
                    <label className="switch">
                        <input type="checkbox"></input>
                        <span className="slider round"></span>
                    </label>
                </div>
                <button className="buttonNextG" onClick ={e => {window.location.hash = "generateGenre"}}>→</button>
            </div>
        </div>
    )
}

export default GenerateStartView;