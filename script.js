$(document).ready(function(){
	$("#header, #subheader").hide().each(function(i) {
  		$(this).delay(i*500).fadeIn(1500);

});
	$("div#nav").hover(
      function () {
        $("#navli").fadeIn('slow');
      }, 
      function () {
        $("navli#").fadeOut('slow');
      }
    );


});
