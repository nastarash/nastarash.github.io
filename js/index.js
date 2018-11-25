import GetData from './getData.js';
import View from './createView.js';
import Article from './createArticle.js';

const pageView = new View();
pageView.addCheckBoxexSection();
pageView.createNumSection();
pageView.createGetNewsButton();

const fetchData = async () => {
    const source = await pageView.getCheckedSources();
    let data = new GetData(source, pageView.getFilter() > 100 ? 100 :
        pageView.getFilter() <= 0 ? 1 : pageView.getFilter());
    return data.getData();
}

const articlesHash = async () => {
    const articleHash = fetchData();
    return await articleHash.then(response => response.map(articleData => {
        let article = new Article(articleData);
        return article.createArticle();
    }).join(""));
}

getNews.addEventListener("click", async () => {
    const content = await articlesHash();
    document.body.appendChild(document.createElement('form')).outerHTML = content;
});
getNews.addEventListener("click", () => root.style.display = 'none');
getNews.addEventListener("click", () => errorBlock.style.display = 'block');