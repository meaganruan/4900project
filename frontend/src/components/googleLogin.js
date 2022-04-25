import React from 'react';
import { GoogleLogin } from 'react-google-login';

const clientId = '773631837061-qiveoivmu84hh3vle54oc0v3hh0har1b.apps.googleusercontent.com' ;

function GoogleLI(){
    const onSuccess = (res) => {
        console.log(' [Login Success] currentUser:', res.profileobj)};
        const onFailure = (res) =>{
        console.log('[Login failed] res:', res)};
        return(
            <div>
                <GoogleLogin
                clientId={clientId}
                buttonText="Login"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
                isSignedIn={true}
                />
            </div>
        );
}

export default GoogleLI;