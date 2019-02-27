//I save my news data as an array in my variable
const news = STEAM.appnews.newsitems;
//I run my menu function to load my news on the screen
menu();
//I print my news elements inside my root div on HTML.
function menu(){
  document.getElementById("root").innerHTML = `
  ${news.map(newsTemplate).join("")}`
}
//Function for the template of each news module/card
function newsTemplate(news){
  let date = calculateDate(news.date);
  return `
    <div onclick="window.open('${news.url}');" class="news">
    <h2 class="newsTitle"><strong>${news.title}</strong></h2>
    <p class="newsAuthor">${news.author}</p>
    <p class="newsBrief">${news.contents}</p>
    <p class="newsDate">${date}</p>
    </div>
  `;
}
//Function to filter news by whichever property from the Object
function dynamicSort(property) {
    let sortOrder = 1;
    if(property[0] === "-") {
        sortOrder = -1;
        property = property.substr(1);
    }
    return function (a,b) {
        if(sortOrder == -1){
            return b[property].localeCompare(a[property]);
        }else{
            return a[property].localeCompare(b[property]);
        }
    }
}
//Function to empty my root div and erase the news, before I displat them organized based on the filters
function emptyDiv(){
  document.getElementById("root").innerHTML = "";
}
//Function that empties my root div and displays the news arranged by title A-Z
function displayNewsByTitle(){
  let sortedNewsByTitle = news;
  sortedNewsByTitle.sort(dynamicSort("title"));
  emptyDiv();
  //I print my news elements inside my root div on HTML.
  document.getElementById("root").innerHTML = `
  ${sortedNewsByTitle.map(newsTemplate).join("")}`
}
//Function to only display news with an author
function filterNewsByAuthor(){
  const sortedNewsByAuthor = news;
  sortedNewsByAuthor.sort(dynamicSort("author"));
  let newsWithAuthors = [];
  emptyDiv();
  for(let i = 0; i < news.length; i++){
    //If the text value in author is not empty, then I add that element to my new array
    if(sortedNewsByAuthor[i].author != ""){
      newsWithAuthors.push(sortedNewsByAuthor[i]);
    }
  }
  //I print my news elements inside my root div on HTML.
  document.getElementById("root").innerHTML = `
  ${newsWithAuthors.map(newsTemplate).join("")}`
}

//Function that empties my root div and displats the news arranged by date (most recent)
function displayNewsByDate(){
  let sortedNewsByDate = news;
  sortedNewsByDate.sort(function(a, b) {
    return a.date - b.date;
  });
  emptyDiv();
  //I print my news elements inside my root div on HTML.
  document.getElementById("root").innerHTML = `
  ${sortedNewsByDate.map(newsTemplate).join("")}`
}

//Function to convert the date (EPOCH to Day/Month/Year format)
function calculateDate(epochDate){
  let humanTime;
  let date = new Date(epochDate*1000);
  //I start to breakdown the date.
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();
  humanTime = day + "-" + month + "-" + year;
  return humanTime;
}

// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

const example = () => {
  return 'example';
};

window.example = example;
