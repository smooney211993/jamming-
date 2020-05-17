let accessToken ;
const clientId = ' d66fb2e9a8384c6191cd8bf883b56e3f';
const redirectUri = "http://localhost:3000/";
const Spotify = {
    getAccessToken (){
        if(accessToken){
            return accessToken
        }
        const accessTokenMatch = windows.location.href.match(/access_token=([^&]*)/);
        const expiresInMatch =  windows.location.href.match(/expires_in=([^&]*)/);

        if (accessTokenMatch && expiryinMatch){
            accessToken = accessTokenMatch[1];
            const expiresIn = Number(expiresInMatch[1]);
            
            window.setTimeout(()=> accessToken = '', expiresIn * 1000);
            window.history.pushState('Access Token', null, '/')
            return accessToken;

        } else {
            const accessUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUri}`
            window.location = accessUrl;
        }
    },
 
}


const search = async (term) => {
    try {
        const accessToken = Spotify.getAccessToken()
    const response = await fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`,
    {
        headers: {
            Authorization : `Bearer ${accessToken}`
        }
    }
    )

    if(response.ok){
        const jsonResponse = await response.json()
        if(!jsonResponse.tracks){
            return [];
        }
       return jsonResponse.map((track)=>{
           return {
               id : track.id,
               Name : track.name,
               Artist : track.artist[0].name,
               Album : track.album.name,
               URI : track.uri

           }
       })
    }

    
    } catch (error) {
        
    }


        

}


export default Spotify;