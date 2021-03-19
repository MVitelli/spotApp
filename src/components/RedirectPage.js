import { useEffect } from 'react';
import { getParamValues } from '../utils/functions';

const RedirectPage = (props) => {
    useEffect(() => {
        const { setExpiryTime, history, location } = props;
        try {
            if (!location.hash) {
                return history.push('/dashboard');
            }
            const access_token = getParamValues(location.hash);
            const expiryTime = new Date().getTime() + access_token.expires_in * 1000;
            localStorage.setItem('params', JSON.stringify(access_token));
            localStorage.setItem('expiry_time', expiryTime);
            history.push('/dashboard');
        } catch (error) {
            history.push('/');
        }
    }, [])

    return (
        null
    )
}

export default RedirectPage