$(document).ready(function(){
    $(".A").hover(function(){
      $(".large").slideToggle()
    });
    $(".B").hover(function(){
      $(".medium").slideToggle()
    });
    $(".C").hover(function(){
      $(".small").slideToggle()
    });
    
    
    
    $("#buffalo").click(function(){
        $("#buffalo").slideDown('1500').hide('1000');
        $("#BUFFALO-T").show('1500');
    });
    $("#BUFFALO-T").click(function(){
        $("#BUFFALO-T").slideUp('1500');
        $("#buffalo").slideDown('1500');
    });

    $("#garden-image").click(function(){
      $("#garden-image").slideDown('1500').hide('1000');
      $("#garden").show('1500');
  });
  $("#garden").click(function(){
      $("#garden").slideUp('1500');
      $("#garden-image").slideDown('1500');
  });

  $("#junction").click(function(){
    $("#junction").slideDown('1500').hide('1000');
    $("#JUNCTION").show('1500');
});
$("#JUNCTION").click(function(){
    $("#JUNCTION").slideUp('1500');
    $("#junction").slideDown('1500');
});

$("#nyali").click(function(){
  $("#nyali").slideDown('1500').hide('1000');
  $("#NYALI").show('1500');
});
$("#NYALI").click(function(){
  $("#NYALI").slideUp('1500');
  $("#nyali").slideDown('1500');
});
$("#rupa").click(function(){
  $("#rupa").slideUp('1500');
  $("#RUPA").slideDown('1500');
});

$("#RUPA").click(function(){
$("#RUPA").slideDown('1500').hide('1000');
$("#rupa").show('1500');
});
$("#two-rivers").click(function(){
  $("#two-rivers").slideUp('1500');
  $("#TWO-RIVERS").slideDown('1500');
});

$("#TWO-RIVERS").click(function(){
$("#TWO-RIVERS").slideDown('1500').hide('1000');
$("#two-rivers").show('1500');
});

$("#greensq").click(function(){
  $("#greensq").slideUp('1500');
  $("#GREENSQ").slideDown('1500');
});

$("#GREENSQ").click(function(){
$("#GREENSQ").slideDown('1500').hide('1000');
$("#greensq").show('1500');
});

$("#maasai").click(function(){
  $("#maasai").slideUp('1500');
  $("#MAASAI").slideDown('1500');
});

$("#MAASAI").click(function(){
$("#MAASAI").slideDown('1500').hide('1000');
$("#maasai").show('1500');
});


$("#the-hub").click(function(){
  $("#the-hub").slideDown('1500').hide('1000');
  $("#THE-HUB").show('1500');
});
$("#THE-HUB").click(function(){
  $("#THE-HUB").slideUp('1500');
  $("#the-hub").slideDown('1500');
});

});


  