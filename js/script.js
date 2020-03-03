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
});
  