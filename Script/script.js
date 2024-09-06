// const API_KEY = "0ea2bdb2e0714ed0a010339f866ae4b0";
// const url = "https://newsapi.org/v2/everything?q=";

// window.addEventListener("load", () => fetchNews("Technology"));

// async function fetchNews(query) {
//     const res = await fetch(`${url}${query}&apiKey=${API_KEY}`);
//     const data = await res.json();
//     bindData(data.articles);
// }

// function bindData(articles) {
//     const cardsContainer = document.getElementById("cardscontainer");
//     const newsCardTemplate = document.getElementById("template-news-card");

//     cardsContainer.innerHTML = "";

//     articles.forEach((article) => {
//         if (!article.urlToImage) return;

//         const cardClone = newsCardTemplate.content.cloneNode(true);
//         fillDataInCard(cardClone, article);
//         cardsContainer.appendChild(cardClone);
//     })
// }

// function fillDataInCard(cardClone, article) {
//     const newsImg = cardClone.querySelector("#news-img");
//     const newsTitle = cardClone.querySelector("#news-title");
//     const newsSource = cardClone.querySelector("#news-source");
//     const newsDesc = cardClone.querySelector("#news-desc");

//     newsImg.src = article.urlToImage;
//     newsTitle.innerHTML = `${article.title.slice(0, 60)}...`;
//     newsDesc.innerHTML = `${article.description.slice(0, 150)}...`;

//     const date = new Date(article.publishedAt).toLocaleString("en-US", { timeZone: "Asia/Jakarta" })

//     newsSource.innerHTML = `${article.source.name} · ${date}`;

//     cardClone.firstElementChild.addEventListener("click", () => {
//         window.open(article.url, "_blank");
//     })
// }

// let curSelectedNav = null;
// function onNavItemClick(id) {
//     fetchNews(id);
//     const navItem = document.getElementById(id);
//     curSelectedNav?.classList.remove("active");
//     curSelectedNav = navItem;
//     curSelectedNav.classList.add("active");
// }

// const searchButton = document.getElementById("search-button");
// const searchText = document.getElementById("search-text");

// searchButton.addEventListener("click", () => {
//     const query = searchText.value;
//     if (!query) return;
//     fetchNews(query);
//     curSelectedNav?.classList.remove("active");
//     curSelectedNav = null;
// })
const API_KEY = "250f5312a5fc4095beca9abf0d147ed8";
const url = "https://newsapi.org/v2/everything?q=";
// url is needed to fetch the data
// data is provided in json format by key value pair
// when our window is loaded we have to fetch out the news
window.addEventListener("load", () => fetchNews("Technology"));
async function fetchNews(query) {
  const res = await fetch(`${url}${query}&apiKey=${API_KEY}`);
  // console.log(res);
  const data = await res.json();
  // data will be returned it object format
   console.log(data.articles);
  bindData(data.articles);
}
function bindData(articles) {
  const cardsContainer = document.getElementById("cardscontainer");
  const newsCardTemplate = document.getElementById("template-news-card");
  // we are selecting the template
  cardsContainer.innerHTML = "";
  // when our api is being called then our card container becomes empty
  // if we are not using it old + new articles will also be shown
  articles.forEach((article) => {
    if (!article.urlToImage) return;
    const cardClone = newsCardTemplate.content.cloneNode(true);
    // in the template all other divs will be cloned
    // to fill datas in the clone
    // console.log(cardClone);
    fillDataInCard(cardClone, article);
    cardsContainer.appendChild(cardClone);
  });
}
function fillDataInCard(cardClone, article) {
  const newsImg = cardClone.querySelector("#news-img");
  const newsTitle = cardClone.querySelector("#news-title");
  const newsSource = cardClone.querySelector("#news-source");
  const newsDesc=cardClone.querySelector("#news-desc");
  newsImg.src=article.urlToImage;
  newsTitle.innerHTML=`${article.title.slice(0,60)}...`;
  newsDesc.innerHTML=`${article.description.slice(0,60)}....`;
  const date=new Date(article.publishAt).toLocaleString("en-US",{timeZone:"Asia/jakarta"})
  newsSource.innerHTML=`${article.source.name}.${date}`
  cardClone.firstElementChild.addEventListener("click",()=>{
    window.open(article.url,"_blank");
  })
}
let curSelectedNav=null;
function onNavItemClick(id){
  fetchNews(id);
  const navItem=document.getElementById(id);
  curSelectedNav?.classList.remove("active");
  // if the current selcted nav is null then we will remove active
  curSelectedNav=navItem;
  curSelectedNav.classList.add("active");
}

const searchButton=document.getElementById("search-button");
const searchText=document.getElementById("search-text");
searchButton.addEventListener("click",()=>{
  const query=searchText.value;
  if(!query)return;
  fetchNews(query);
  curSelectedNav.classList.remove("active");
  // we are doing these if when we are searching if any nav link is selected then we are removing it from active
  curSelectedNav=null;

})