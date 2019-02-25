const news = STEAM.appnews.newsitems;
console.log(news);

function newsTemplate(news){
  return `
    <div class="news">
    <h2 class="newsTitle"><strong>${news.title}</strong></h2>
    <p class="newsAuthor">${news.author}</p>
    <p class="newsBrief">${news.contents}</p>
    <p class="newsLink">${news.url}</p>
    </div>
  `;
}

document.getElementById("root").innerHTML = `
${news.map(newsTemplate).join("")}`
