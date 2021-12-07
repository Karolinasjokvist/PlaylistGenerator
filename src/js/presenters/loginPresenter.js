import React, { Component } from 'react';
import  LoginView from '../views/loginView';

function LoginPresenter(props){

    return (
        <div>
            {<LoginView/>}
        </div>
    );
}

export default LoginPresenter;