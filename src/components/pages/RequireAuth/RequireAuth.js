import React from 'react';
import { Button } from 'react-bootstrap';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../../shared/Loading/Loading';
import auth from './../../../firebase.init';
import { toast } from 'react-toastify';

const RequireAuth = ({children}) => {
    const [sendEmailVerification, sending] = useSendEmailVerification(auth);
    const [user, loading] = useAuthState(auth);
    const loaction = useLocation();

    if(loading || sending){
        return <Loading/>
    }

    if(!user){
        return <Navigate to="/login" state={{from : loaction}} replace />
    }

    if(user?.providerData[0]?.providerId === 'password' && !user?.emailVerified){
        return(
            <div className='my-5 d-flex align-items-center justify-content-center flex-column' style={{height : '60vh'}}>
                <h3>Please verify your email.</h3>
                <Button
                    onClick={async ()=>{
                        await sendEmailVerification();
                        toast('Please check your email.');
                    }}
                >Send email agin</Button>
            </div>
        )
    }

    return children;
};

export default RequireAuth;