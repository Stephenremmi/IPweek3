$(document).ready(function() {
  $(".icon1").click(function() {
    $(".icon1").toggle();
    $(".p3").show();
  });
  $(".p3").click(function(){
    $(".icon1").toggle();
    $(".p3").toggle();
   
  });

  $(".icon2").click(function() {
    $(".icon2").toggle();
    $(".p4").show();
  });
$(".p4").click(function(){
  $(".icon2").toggle();
  $(".p4").toggle();

});

  $(".icon3").click(function() {
    $(".icon3").toggle();
    $(".p5").toggle();
  });
  $(".p5").click(function(){
    $(".icon3").toggle();
    $(".p5").toggle();
  });
});


  
 
  
  