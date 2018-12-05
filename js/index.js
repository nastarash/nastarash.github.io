import GetData from './getData.js';
import GetDataProxy from './getData.js';
import View from './createView.js';
import Article from './createArticle.js';
import '../css/style.scss';

const myErrorSingleton = (function () {
    let instance,
        errorMessage = `Ooops, network response wasn't ok`;

    function init() {
        return {
            showError: function () {
                return alert(errorMessage);
            }
        }
    }
    return {
        getInstance: function () {
            if (!instance) {
                instance = init();
            }
            return instance;
        }
    }
})();

const err = myErrorSingleton.getInstance();

const pageView = new View();

pageView.createHeader();
pageView.createFooter();
pageView.addCheckBoxexSection();
pageView.createNumSection();
pageView.createGetNewsButton();

document.body.setAttribute('class', 'container');

const fetchData = async () => {
    const source = await pageView.getCheckedSources();
    let data = new GetDataProxy(source, pageView.getFilter());
    console.log("method: "+ data.request.method +','+ "sources: "+data.source +','+ "url: " + data.request.url)
    return source != 0 ? await data.getData().then(response => response.map(articleData => {
        let article = new Article(articleData);
        return article.createArticle();
    }).join("")) : err.showError();

};

getNews.addEventListener("click", async () => {
    const content = await fetchData();
    document.body.appendChild(document.createElement('form')).outerHTML = content;
});
getNews.addEventListener("click", () => root.style.display = 'none');

