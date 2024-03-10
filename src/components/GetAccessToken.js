
function getAccessToken() {

        const clientID = 'e3745532c0c3495ba38d52214cafd102';

        const redirect_uri = 'http://localhost:3000/';

        let url = 'https://accounts.spotify.com/authorize';

        url += '?response_type=token';
        url += '&client_id=' + encodeURIComponent(clientID);
        url += '&redirect_uri=' + encodeURIComponent(redirect_uri);
        
        window.location = url;

}

export default getAccessToken;

