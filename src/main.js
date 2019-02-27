
document.getElementById("organizeByAuthor").addEventListener("click", displayNewsByTitle);
document.getElementById("organizeByDate").addEventListener("click", displayNewsByDate);
document.getElementById("filterByAuthor").addEventListener("click", filterNewsByAuthor);
document.getElementById("filterByAuthor").addEventListener("click", filterNewsByAuthor);

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