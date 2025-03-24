
export const fetchApi = ( pathRoute  ) => {

    const urlHostApi = import.meta.env.VITE_API_URL_DEV;
    const urlFetch = `${urlHostApi}/${pathRoute}` ;

    return fetch( urlFetch )
        .then( res => res.json() )
        .catch( error => console.error( error ) );
}
