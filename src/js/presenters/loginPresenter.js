import  React from 'react';
import  LoginView from '../views/loginView';
import  LoginUser from '../loginModel';

function LoginPresenter(props){

    return (
        <div>
            {<LoginView/>}
            {<LoginUser/>}
        </div>
    );
}

export default LoginPresenter;