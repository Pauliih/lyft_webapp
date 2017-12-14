$(function() {
  
  $('#signup').hide();
  $('#form-signup').hide();
  $('#verify-phone').hide();
  
  setInterval(function() {
    $('#splash').fadeOut(500);
    $('#signup').show();
  }, 1000);
   
  $('.btn-signup').click(function() {
  	$('#signup').addClass('hidden-xs');
  	$('#form-signup').removeClass('hidden-xs');
    $('#form-signup').show();
  });

  $('.back').click(function() {
    $('#form-signup').addClass('hidden-xs');
    $('#verify-phone').addClass('hidden-xs');
    $('#signup').removeClass('hidden-xs');
    //Al volver se limpia el phone number
    $('#phone').val("");

    //Deshabilito el boton next
    $('.btn-next').attr('disabled','disabled');

  });
/*
  $('.back2').click(function() {
    $('#form-signup').addClass('hidden-xs');
    $('#verify-phone').removeClass('hidden-xs');
  });
*/

  //Habilita el boton next al ingresar 10 digitos
  $('#demo').keyup(function() {
    var num = $(this).val();
    for (var i = 0; i < 1; i++) {
      if (num.length == 10) {
        $('.btn-next').removeAttr('disabled');
      }else{
        $('.btn-next').attr('disabled','disabled');
      };
    };
  });

  $('.btn-next').click(function() {
    var code = "";
    var str = "0123456789";
    for (var i = 0; i < 3; i++) {
      code += str.charAt(Math.floor(Math.random() * str.length));
    }
    alert("Tu código es: LAB-" + code); // Alerta se corta*
  });

  $('.btn-next').click(function() {
    $('#form-signup').hide();
    $('#verify-phone').removeClass('hidden-xs');
    $('#verify-phone').show();
  });

  //banderas
  $("#demo").intlTelInput();

  
});

