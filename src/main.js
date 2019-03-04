//I save my news data as an array in my variable
const news = window.STEAM.appnews.newsitems;
document.getElementById("scroll").addEventListener("click", topFunction);
//I declare my event listeners for my HTML elements
document.getElementById("organizeByAuthor").addEventListener("click", () => {
  let organizedByTitleArray = window.dataLovers.displayNewsByTitle(news);
  window.dataLovers.printNews(organizedByTitleArray);
});
document.getElementById("organizeByDate").addEventListener("click", () => {
  let organizedByDateArray = window.dataLovers.displayNewsByDate(news);
  window.dataLovers.printNews(organizedByDateArray);
});
document.getElementById("filterByAuthor").addEventListener("click", () => {
  let filteredArray = window.dataLovers.filterNewsByAuthor(news);
  window.dataLovers.printNews(filteredArray);
});
menu();

function menu(){
  document.getElementById("root").innerHTML = `
  ${news.map(window.dataLovers.newsTemplate).join("")}`;
}

window.onscroll = function() {scrollFunction();};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("scroll").style.display = "block";
  } else {
    document.getElementById("scroll").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
