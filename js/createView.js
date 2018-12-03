import CheckBox from './createCheckBox.js'
import GetSources from './getNewsChannel.js';

export default class View {
    constructor(sources = []) {
        this.sources = new GetSources();
        this.data = this.sources.getChannelTitle()
    }

    async createSources() {
        return await this.data
            .then(response => response.map(source => {
                let checkBox = new CheckBox(source.toLowerCase().split(" ").join("-"), source);
                return checkBox.cretateCheckBox()
            }).join(''));
    }
    createHeader() {
        return document.body.appendChild(document.createElement('div')).innerHTML = `<div id="root">Get lates news by following: </div>`
    }
    createFooter() {
        return document.getElementById('root').appendChild(document.createElement('form')).outerHTML = `<footer id="copyRight">Powered by <a href="https://newsapi.org/" title="News Api" target="_blank">News Api</a>
        </footer>`
    }

    createNumSection() {
        return document.getElementById('root').appendChild(document.createElement('form')).outerHTML = `<div id ="inputFilter">Please,enter number of articles:
                                                                                                                            <input id="filterNews">
                                                                                                        </div>`
    }

    createGetNewsButton() {
        return document.getElementById('root').appendChild(document.createElement('form')).outerHTML = `<button class="btn" id="getNews">Let's go</button>`
    }

    async addCheckBoxexSection() {
        return document.getElementById('root').appendChild(document.createElement('form')).outerHTML = await this.createSources();
    };

    getCheckedSources() {
        return Array.from(document.getElementsByClassName('form-check-input')).reduce((accum, arrValue) => {
            if (arrValue.checked) {
                accum.push(arrValue.value);
            }
            return accum;
        }, []);
    }
    getFilter() {
        return document.getElementById('filterNews').value > 100 ? 100 :
            document.getElementById('filterNews').value <= 0 ? 1
                : document.getElementById('filterNews').value;
    }

}