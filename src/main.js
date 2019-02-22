//I declare my event listeners for my HTML elements
let authors = dataLovers.getAuthors;
let newsWithAuthor = "";
filterData(authors, newsWithAuthor);

//Function to get the place in the array of ONLY the news that have an author
function filterData(authors, newsWithAuthor){
  let filteredNews = [];
  for(let i = 0; i < authors.length; i++){
    if(authors[i] != newsWithAuthor){
      filteredNews.push(i);
    }
  }
}



//Function to sort the news from A to Z, based on title
function titlesAtoZ(){
  let titlesAtoZ = dataLovers.getTitles;
  titlesAtoZ.sort();

  console.log(titlesAtoZ);
}

//Function to sort the news from Z to A, based on title
function titlesZtoA(){
  let titlesZtoA = dataLovers.getTitles;
  titlesZtoA.sort();
  titlesZtoA.reverse();
  console.log(titlesZtoA);
}

//Function to sort news by most recent dateArray
function mostRecent(){
  let mostRecentNews = dataLovers.getDate;
  mostRecentNews.sort();
  console.log(mostRecentNews);
}
