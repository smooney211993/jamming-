let accessToken ;
const clientId = 'd66fb2e9a8384c6191cd8bf883b56e3f';
const redirectUri = "http://localhost:3000/";
const Spotify = {
    getAccessToken (){
        if(accessToken){
            return accessToken
        }
        const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
        const expiresInMatch =  window.location.href.match(/expires_in=([^&]*)/);

        if (accessTokenMatch && expiresInMatch){
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

    async search(term) {
        try {
        this.getAccessToken()
        
        const response = await fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`,
        {
            headers: {
                Authorization : `Bearer ${accessToken}`
            }
        }
        )
        
    
        if(response.ok){
            
            const jsonResponse = await response.json()
            console.log(jsonResponse) 
            if(!jsonResponse.tracks){
                return [];
            }
           return jsonResponse.tracks.items.map((track)=>({
                     id : track.id,
                    name : track.name,
                    artist : track.artists[0].name,
                    album : track.album.name,
                    uri : track.uri
        
                }))
          
                 
        }
        
        } catch (error) {
            console.log(error)
        }

    },

    async savePlayList(name, trackUris){
        try {
            if(!name || !trackUris.length) {
                return ; 
            }
    
            const accessToken = this.getAccessToken()
            const headers = {Authorization: `Bearer ${accessToken}`};
            let userId;
            let playListId;
            const response = await fetch(`https://api.spotify.com/v1/me`, {headers: headers})
            if(response.ok){
                const jsonResponse = await response.json()
                 userId = jsonResponse.id
                
            }

            const playListResponse = await fetch(`https://api.spotify.com/v1/users/${userId}/playlists/`,{
                headers: headers,
                method: 'POST',
                body: JSON.stringify({name: name})
            })
            if(playListResponse.ok){
                const playListResponseJsonRespone = await playListResponse.json()
                playListId = playListResponseJsonRespone.id
            }

            const addPlaylistResponse = await fetch(`https://api.spotify.com/v1/users/${userId}/playlists/${playListId}/tracks`,{
                headers: headers,
                method: 'POST',
                body: JSON.stringify({uris: trackUris})
            })



            


            
        } catch (error) {
            console.log(error)
        }
        

    }
 
}


export default Spotify;