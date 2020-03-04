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

    $("#garden").click(function(){
      $("#garden").slideDown('1500').hide('1000');
      $("#GARDEN").show('1500');
  });
  $("#GARDEN").click(function(){
      $("#garden").slideUp('1500');
      $("#garden").slideDown('1500');
  });

  $("#junctin").click(function(){
    $("#JUNCTION").slideDown('1500').hide('1000');
    $("#JUNCTION").show('1500');
});
$("#JUNCTION").click(function(){
    $("#JUNCTION").slideUp('1500');
    $("#junction").slideDown('1500');
});

});
  