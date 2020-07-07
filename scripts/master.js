$(document).ready(function () {
  $('.fa-power-off').click(
    function(){
      if($(this).data('mode')=="on"){
        $.get('/?switch=off');
        $(this).css({
          'color' : '#5CCFE6',
          'transform' : 'rotate(360deg)',
          'text-shadow' : 'none'
        });
        $(this).data('mode','off');
      }
      else{
        $.get('/?switch=on');
        $(this).css({
          'color' : '#ffffff',
          'transform' : 'rotate(0deg)',
          'text-shadow' : '0 0 5px #5CCFE6, 0 0 10px #5CCFE6, 0 0 20px #5CCFE6, 0 0 40px #5CCFE6'
        });
        $(this).data('mode','on');
      }
    }
  );
});

