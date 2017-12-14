$(function() {
  
  $('#signup').hide();
  $('#main').hide();
  
  setInterval(function() {
    $('#splash').fadeOut(500);
    //permite el scroll de nuevo
    $('#signup').show();
  }, 1000);
   
  //Revisar eventos
  $('.btn-signup').click(function(){
  	$('#signup').hide();
  	$('#main').show();
  });
});