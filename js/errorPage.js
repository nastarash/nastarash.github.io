export default class ErrorPage {
    constructor(message) {
        this.message = message;
    }
    networkError() {
        return document.body.innerHTML = `<div id='errorBlock'> Ooops, smth gonna wrong, ${this.message}
                                <img id="errorMedia" src="media/train.gif"></div>`
    }
}