export default class GetData {
    constructor(source, pageSize) {
        this.source = source;
        this.request = new Request(`https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=e25f68463ae0441a947aadda3a0fa55c&pageSize=${pageSize}`);
    }
    getData() {
        return fetch(this.request)
            .then(response => response.json())
            .then(data => data.articles);
    }
    fakeFabricPost() {
        const fakeRequest = new Request('http://localhost:9000', {
            method: 'POST',
            body: '{"foo":"bar"}'
        });
        return console.log("Just for adding method " + fakeRequest.method)
    }
}

class GetDataProxy extends GetData{
    getData(){
        if(!this.data){
            this.data = super.getData();
        }
        return this.data;
    }
}