import React, { Component } from 'react';
import '../../css/generateStartView.css';

export function GenerateStartView(props) {
    return (
        <div className>
            <div>
                <div className="textBottomG">
                    Allow explicit songs {' '}
                    <label className="switch">
                        <input type="checkbox"></input>
                        <span className="slider round"></span>
                    </label>
                </div>
            </div>

            <div>
            <button className="buttonNextG" onClick={e => {window.location.hash = "generateGenre"}}>→</button>
                <button className="buttonBackG" onClick={e => {window.location.hash = "#start"}}>←</button>
                <div className="textTopG">
                    How many songs would you like in your playlist?
                </div>
            </div>
            <div className="menuG">
                <div className="menuItemG">
                    <button className="buttonLeftG"onClick={e=>props.currentNumberOfSongs(10)}>
                        <p>Short<br></br>10 songs</p>
                    </button>
                </div>
                <div className="menuItemG">
                    <button className="midButtonG" onClick={e=>props.currentNumberOfSongs(20)}>
                        <p>Medium<br></br>20 songs</p>
                    </button>
                </div>
                <div className="menuItemG">
                    <button className="buttonRightG" onClick={e=>props.currentNumberOfSongs(30)}>
                        <p>Long<br></br>30 songs</p>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default GenerateStartView;