$(document).ready(function () {
  $('.fa-power-off').click(
    function(){
      if($(this).hasClass('on')){
        $(this).removeClass('on');
        $(this).addClass('off');
        $.get('/?switch=off');
      }
      else{
        $.get('/?switch=on');
        $(this).removeClass('off');
        $(this).addClass('on');
        $.get('/?switch=off');
      }
    }
  );

  $('.fa-sun').click(
    function(){
      $('nav input[type=range]').val('125');
      $('.fa-sun').css({'transform':`rotate(360deg)`});
      $.get(`/?brightness=125`);
    }
  );

  $('nav input[type=range]').on('input', function () {
    $.get(`/?brightness=${$(this).val()}`);
    $('.fa-sun').css({'transform':`rotate(${$(this).val()}deg)`});
  });

  $('input[name=frequncy]').on('input', function () {
    $.get(`/?frequncy=${$(this).val()}`);
    $('.bpm').text(`BPM: ${$(this).val()}`);
  });

  $('.radio_block').click(function() {
    let name = $(this).data('name');
    let value = $(this).data('value');
    $.get(`/?${name}=${value}`);
    $('.indicator_active').addClass('indicator');
    $('.indicator_active').removeClass('indicator_active');
    $(this).children('.indicator').addClass('indicator_active');
    $(this).children('.indicator').removeClass('indicator');
  });

  $('.color').on('change', function () {
    const colorHex = $(this).val();
    const targetMode = $(this).attr('name');
    $('.hex').text(`HEX: ${colorHex}`);
    const red = parseInt(colorHex.slice(1,3),16);
    const green = parseInt(colorHex.slice(3,5),16);
    const blue = parseInt(colorHex.slice(5,7),16);
    $('.rgb').text(`R:${red} G:${green} B:${blue}`);
    $.get(`/?${targetMode}R=${red}&${targetMode}G=${green}&${targetMode}B=${blue}`);
  });

  $('.fa-list').click(function () {  
    $('.hide_menu').removeClass('hide');
  });

  $('.fa-times').click(function () {  
    $('.hide_menu').addClass('hide');
  });
});


