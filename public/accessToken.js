//import getAccessToken from "../src/components/GetAccessToken";

const redirect_uri = 'http://localhost:3000/';

function getAccessToken() {

    const clientID = 'e3745532c0c3495ba38d52214cafd102';

    let url = 'https://accounts.spotify.com/authorize';

    url += '?response_type=token';
    url += '&client_id=' + encodeURIComponent(clientID);
    url += '&redirect_uri=' + encodeURIComponent(redirect_uri);
    url += '&scope=user-read-private user-read-email playlist-modify-public playlist-modify-private';
    window.location = url;
   /* const response = await fetch(url);

    if (response.ok) {
        const currentUrl = window.location.href;
        const urlParams = new URLSearchParams(currentUrl);

        return urlParams.get('access_token');

    }
    throw new Error ('Request failed'); */
}

//Gets the access token just one time!

if (window.location.href === redirect_uri) {
    getAccessToken();
}
