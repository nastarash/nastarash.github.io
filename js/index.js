import GetData from './getData.js';
import View from './createView.js';
import Article from './createArticle.js';

const q = new View();
q.addCheckBoxexSection();
q.createNumSection()
q.createGetNewsButton();

const fetchData = async () => {
    const source = await q.getCheckedSources();
    let data = new GetData(source, q.getFilter());
    const articles = data.getData();
    return articles
}

const art = async () => {
    const ar = fetchData();
    return await ar.then(response => response.map(articleData => {
        let article = new Article(articleData);
        return article.createArticle();
    }).join(""));
}

const addArticles = async () => {
    return document.body.appendChild(document.createElement('form')).outerHTML = await art();
};

getNews.addEventListener("click", () => addArticles());
getNews.addEventListener("click", () => root.innerHTML = '');