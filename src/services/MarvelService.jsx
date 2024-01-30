

class MarvelService {
    _apiBase = 'https://gateway.marvel.com:443/v1/public/';
    _apiKey = 'apikey=f1d745a6afa90b36aac7253bf870a85a';

    getResources = async (url) => {
        let res = await fetch(url);
        if(!res.ok){
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }

        return await res.json()
    }

    getAllCharacters = () => {
        return this.getResources(`${this._apiBase}characters?limit=9&offset=210&${this._apiKey}`)
    }

    getCharacter = (id) => {
        return this.getResources(`${this._apiBase}characters/${id}?${this._apiKey}`)
    }
}

export default MarvelService