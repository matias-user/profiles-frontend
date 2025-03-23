
export const fetchRoles = ( urlFetch ) => {

    return fetch( urlFetch )
        .then( res => res.json() )
        .catch( error => console.error( error ) );
}
