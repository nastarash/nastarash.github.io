export default class GetSources {
    constructor() {
        this.request = `https://newsapi.org/v2/sources?apiKey=e25f68463ae0441a947aadda3a0fa55c&language=en&category=technology`;
    }

    getChannelTitle() {
        return fetch(this.request)
            .then(response => response.json())
            .then(data => data.sources)
            .then(arr => arr.map(item => item.name));
    }
}