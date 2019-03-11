//I save my news data as an array in my variable
const news = window.STEAM.appnews.newsitems;
//Array with the string names for my pictures
let images = ["pictures/pic1.jpg", "pictures/pic2.jpg", "pictures/pic3.jpg", "pictures/pic4.jpg", "pictures/pic5.png",
"pictures/pic6.jpg", "pictures/pic7.jpg", "pictures/pic8.jpg", "pictures/pic9.jpg", "pictures/pic10.jpg"];
//I call my function so I can give an image to each news element before I use them in the webpage.
addImage(news, images);

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
