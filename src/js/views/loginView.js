import React, { Component } from 'react';
import '../../css/loginView.css';

export function LoginView() {
    return (
        <div className="contentbox">

            <div className="sidebox"><button className="leftarrow" onClick ={e => {window.location.hash = "#start"}}>&#10229;</button></div>

            <div className="midbox">

                 <div className="formbox">
                    <div className="row1">Login</div>
                    <div className="row2">Username</div>
                    <div className="row3"><input className="inputbox" type="text" placeholder="GenericUsername" maxlength="45"></input></div>
                    <div className="row4">Password</div>
                    <div className="row5"><input className="inputbox" type="password" placeholder="Password123" maxlength="35"></input></div>
                 </div> 

                 <div className="bottombox">
                     <div className="row21">Don't have an account? Click the star to register</div>
                     <div className="row22"> <div className="starimg" onClick ={e => {window.location.hash = "#register"}}>&#9733;</div></div>
                 </div>
            </div>

            <div className="sidebox"> <div className="arrow" onClick ={e => {window.location.hash = "#start"}}>&#10230;</div> </div>
        </div>
    )
}

export default LoginView;