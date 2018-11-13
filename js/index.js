import GetData from './getData.js';
import View from './createView.js';
import Article from './createArticle.js';

const pageView = new View();
pageView.addCheckBoxexSection();
pageView.createNumSection()
pageView.createGetNewsButton();

const fetchData = async () => {
    const source = await pageView.getCheckedSources();
    let data = new GetData(source, pageView.getFilter() > 100 ? 100 :
        pageView.getFilter() <= 0 ? 1 : pageView.getFilter());
    const articles = data.getData();
    return articles
}

const articlesHash = async () => {
    const articleHash = fetchData();
    return await articleHash.then(response => response.map(articleData => {
        let article = new Article(articleData);
        return article.createArticle();
    }).join(""));
}

const addArticles = async () => {
    return document.body.appendChild(document.createElement('form')).outerHTML = await articlesHash();
};

getNews.addEventListener("click", () => addArticles());
getNews.addEventListener("click", () => root.innerHTML = '');