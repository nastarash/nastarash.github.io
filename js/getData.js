export default  class GetData {
    constructor(source,pageSize) {
        this.source = source;
        this.request = `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=e25f68463ae0441a947aadda3a0fa55c&pageSize=${pageSize}`;
    }
    getData() {
        return fetch(this.request)
            .then(response => {
                if (response.ok) {
                    return response.json()
                }
                throw new Error('Network response was not ok.');
            })
            .then(data => data.articles)
            .catch(error => alert(error.message));
    }
}
