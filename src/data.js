//I declare my dataLovers object, where I keep my data functions
window.dataLovers = {

    newsTemplate: function (news){
      let date = window.dataLovers.calculateDate(news.date);
      return `
        <div onclick="window.open('${news.url}');" class="news">
        <h2 class="newsTitle"><strong>${news.title}</strong></h2>
        <p class="newsAuthor">${news.author}</p>
        <p class="newsBrief">${news.contents}</p>
        <p class="newsDate"><i>${date}</i></p>
        </div>
      `;
    },

    printNews: function(array){
      document.getElementById("root").innerHTML = `
      ${array.map(window.dataLovers.newsTemplate).join("")}`;
    },

    dynamicSort: function(property) {
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
        };
    },

    displayNewsByTitle: function(news){
      let sortedNewsByTitle = news;
      sortedNewsByTitle.sort(window.dataLovers.dynamicSort("title"));
      //I print my news elements inside my root div on HTML.
      return sortedNewsByTitle;
    },

    filterNewsByAuthor: function(news){
      const sortedNewsByAuthor = news;

      let newsWithAuthors = sortedNewsByAuthor.filter(function(news){
        return news.author != "";
      });
      return newsWithAuthors;
    },

    displayNewsByDate: function(news){
      let sortedNewsByDate = news;
      sortedNewsByDate.sort(function(a, b) {
        return a.date - b.date;
      });
      return sortedNewsByDate;
    },

    calculateDate: function(epochDate){
      let humanTime;
      let date = new Date(epochDate*1000);
      //I start to breakdown the date.
      let year = date.getFullYear();
      let month = date.getMonth() + 1;
      let day = date.getDate();
      humanTime = day + "-" + month + "-" + year;
      return humanTime;
    }
};
