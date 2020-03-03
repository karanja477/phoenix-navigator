$(document).ready(function(){
    $("#biashara-street-image").click(function(){
      $("#biashara-street-image").slideDown('1500').hide('1000');
      $("#biashara").show('1500');
    });
    $("#biashara").click(function(){
      $("#biashara").slideUp('1500');
      $("#biashara-street-image").slideDown('1500');
    });
  });
  
  $(document).ready(function(){
    $("#city-market-image").click(function(){
      $("#city-market-image").slideDown('1500').hide('1000');
      $("#city").show('1500');
    });
    $("#city").click(function(){
      $("#city").slideUp('1500');
      $("#city-market-image").slideDown('1500');
    });
  });
  
  $(document).ready(function(){
    $("#maasai-market-image").click(function(){
      $("#maasai-market-image").slideDown('1500').hide('1000');
      $("#maasai").show('1500');
    });
    $("#maasai").click(function(){
      $("#maasai").slideUp('1500');
      $("#maasai-market-image").slideDown('1500');
    });
  });
  