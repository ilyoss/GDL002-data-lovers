const STEAM = () => {
  return 'steam';
};

//I create my object DataLovers so I can access these functions through the other js file
window.dataLovers = {
  getTitles: getTitles,
  getAuthors: getAuthors,
  getDate: getDate,
};

//I check the number of news items available in the data and save it as a constant variable
// const newsNumber = Object.keys(STEAM.appnews.newsitems);
const newsNumber = 10;

getAuthors(newsNumber);
getTitles(newsNumber);
getDate(newsNumber);

//Function to save the titles of each news in an array
function getTitles(newsNumber){
  //I declare my array as empty
  let titlesArray = [];
  //Loop to go through the number of items available in the data
  for(let i = 0; i < newsNumber.length; i++){
    //I save the properties of my object[i] in a variable
    let getObjectProperties = Object.values(STEAM.appnews.newsitems[i]);
    //I access the title and save it in my array
    titlesArray[i] = getObjectProperties[1];
  }
}
//Function to save the authors of each news
function getAuthors(newsNumber){
  //I declare my array
  let authorsArray = [];
  for(let i = 0; i < newsNumber.length; i++){
    //I save the properties of my object[i] in a variable
    let getObjectProperties = Object.values(STEAM.appnews.newsitems[i]);
    //I access the author value and save it in the array
    authorsArray[i] = getObjectProperties[4];
  }
}
//Function to save the date of each news in an array
function getDate(newsNumber){
  //Declaring my array
  let dateArray = [];
  for(let i = 0; i < newsNumber.length; i++){
    //I save the properties of my object[i] in a variable
    let getObjectProperties = Object.values(STEAM.appnews.newsitems[i]);
    //I access the date and convert it with my other function before saving its value in the array
    dateArray[i] = calculateDate(getObjectProperties[7]);
  }
}
//Function to convert the date (EPOCH to Day/Month/Year format)
function calculateDate(epochDate){
  let humanTime;
  let date = new Date(epochDate*1000);
  //I start to breakdown the date.
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();
  // let hours = date.getHours();
  // let minutes = date.getMinutes();
  // let seconds = date.getSeconds();
  //I paste the data I need to show for the date and return that value as a string
  humanTime = day + "-" + month + "-" + year;
  return humanTime;
}
