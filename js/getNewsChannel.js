import ErrorPage from './errorPage.js';
export default class GetSources {
    constructor() {
        this.request = `https://newsapi.org/v2/sources?apiKey=e25f68463ae0441a947aadda3a0fa55c&language=en&category=technology`;
    }

    getChannelTitle() {
        return fetch(this.request)
            .then(response => {
                if (response.ok) {
                    return response.json()
                }
                throw new Error('Network response was not ok.');
            })
            .then(data => data.sources)
            .then(arr => arr.map(item => item.name))
            .catch(error => {
                const er = new ErrorPage(error.message);
                return er.networkError()
            });
    }
}