import { useEffect, useState } from 'react';
import useRemoteConfig from './use-remote-config';
import { api } from '../services';
import { THEMOVIEDB_API_KEY } from '../constants/firebase-constants';

export const useFetch = ({ path }) => {
    const apiKey = useRemoteConfig({ key: THEMOVIEDB_API_KEY });
    const [response, setResponse] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const params = {
            api_key: THEMOVIEDB_API_KEY,
        };
       
        api.get(path, { params }).then(({data})=>{
            setResponse(data);
            setLoading(false);
        }).catch(()=>{
            setLoading(false);
        })
    }, []);
    console.log("api_key:::" + THEMOVIEDB_API_KEY)
    console.log("response:::" + response)
    return { loading, response };
}

export default useFetch;