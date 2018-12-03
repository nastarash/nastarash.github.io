import GetData from './getData.js';
import View from './createView.js';
import Article from './createArticle.js';
import '../css/style.scss';

const pageView = new View();
pageView.createHeader();
pageView.createFooter();
pageView.addCheckBoxexSection();
pageView.createNumSection();
pageView.createGetNewsButton();

document.body.setAttribute('class', 'container');

const fetchData = async () => {
    const source = await pageView.getCheckedSources();
    let data = new GetData(source, pageView.getFilter() > 100 ? 100 :
        pageView.getFilter() <= 0 ? 1 : pageView.getFilter());
    return source != 0 ? await data.getData().then(response => response.map(articleData => {
        let article = new Article(articleData);
        return article.createArticle();
    }).join("")) : alert("network response wasn't ok")

};

// const articlesHash = async () => {
//     const articleHash = fetchData();
//     return await articleHash.then(response => response.map(articleData => {
//         let article = new Article(articleData);
//         return article.createArticle();
//     }).join(""));
// };

// const articlesHash = async () => {
//     return await fetchData().then(response => response.map(articleData => {
//         let article = new Article(articleData);
//         return article.createArticle();
//     }).join(""));
// };

getNews.addEventListener("click", async () => {
    const content = await fetchData();
    document.body.appendChild(document.createElement('form')).outerHTML = content;
});
getNews.addEventListener("click", () => root.style.display = 'none');
//getNews.addEventListener("click", () => errorBlock.style.display = 'block');