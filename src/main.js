
//I save my news data as an array in my variable
const news = window.STEAM.appnews.newsitems;
//I declare my event listeners for my HTML elements
document.getElementById("organizeByAuthor").addEventListener("click", () => window.dataLovers.displayNewsByTitle(news));
document.getElementById("organizeByDate").addEventListener("click", () => window.dataLovers.displayNewsByDate(news));
document.getElementById("filterByAuthor").addEventListener("click", () => window.dataLovers.filterNewsByAuthor(news));
menu();

function menu(){
  document.getElementById("root").innerHTML = `
  ${news.map(window.dataLovers.newsTemplate).join("")}`;
}
	//funcion boton ir arriba//
$(document).ready(function(){
 
	$(".ir-arriba").click(function(){
		$("body, html").animate({
			scrollTop: "0px"
		}, 300);
	});
 
	$(window).scroll(function(){
		if( $(this).scrollTop() > 0 ){
			$(".ir-arriba").slideDown(300);
		} else {
			$(".ir-arriba").slideUp(300);
		}
	});
 
}); 