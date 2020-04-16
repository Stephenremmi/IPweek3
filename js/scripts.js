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

$("#work4").mouseover(function () {
  $("#work4").css('opacity', '0.5');
  $("#dark1").show();
  $("#dark1").addClass("projects");
});
$("#work4").mouseleave(function () {
  $("#work4").css('opacity', '1');
  $("#dark1").hide();
});

$(".work3").mouseover(function () {
  $(".work3").css('opacity', '0.5');
  $(".ontario").show();
  $(".ontario").addClass("projects");
});
$(".work3").mouseleave(function () {
  $(".work3").css('opacity', '1');
  $(".ontario").hide();
});

$(".work2").mouseover(function () {
  $(".work2").css('opacity', '0.5');
  $(".polygon").show();
  $(".polygon").addClass("projects");
});
$(".work2").mouseleave(function () {
  $(".work2").css('opacity', '1');
  $(".polygon").hide();
});

$(".work1").mouseover(function () {
  $(".work1").css('opacity', '0.5');
  $(".jim").show();
  $(".jim").addClass("projects");
});
$(".work1").mouseleave(function () {
  $(".work1").css('opacity', '1');
  $(".jim").hide();
});

$(".work5").mouseover(function () {
  $(".work5").css('opacity', '0.5');
  $(".elena").show();
  $(".elena").addClass("projects");
});
$(".work5").mouseleave(function () {
  $(".work5").css('opacity', '1');
  $(".elena").hide();
});

$(".work6").mouseover(function () {
  $(".work6").css('opacity', '0.5');
  $(".form").show();
  $(".form").addClass("projects");
});
$(".work6").mouseleave(function () {
  $(".work6").css('opacity', '1');
  $(".form").hide();
});

$(".work7").mouseover(function () {
  $(".work7").css('opacity', '0.5');
  $(".burned").show();
  $(".burned").addClass("projects");
});
$(".work7").mouseleave(function () {
  $(".work7").css('opacity', '1');
  $(".burned").hide();
});

$(".work8").mouseover(function () {
  $(".work8").css('opacity', '0.5');
  $(".giraffe").show();
  $(".giraffe").addClass("projects");
});
$(".work8").mouseleave(function () {
  $(".work8").css('opacity', '1');
  $(".giraffe").hide();
});

  $(document).ready(function(){
    $('.img5').hover(function () {
    $(this).animate({opacity:'1'});
    },
    function () {
    $(this).animate({opacity:'0'});
 })
});
 $("#sendButton").click(function () {
  var names = $("#names").val();
  var email = $("#email").val();
  var message = $("#textArea").val();
  if ((names === "") || (email === "") || (message === "")) {
      swal({
        title:"Alert!!",
        text: "Enter the empty fields",
        icon: "warning",
      });
  }
else if((names.length <=6)){swal({
  title:"Alert!!",
  text: "Name should be more than 6 characters",
  icon: "warning",
});
}
else if((message.length <=10)){swal({
  title:"Alert!!",
  text: "Message must be more than 10 characters",
  icon: "warning",
});
}
else if((email.length <=14)){swal({
  title:"Alert!!",
  text: "Email address must be more than 14 characters",
  icon: "warning",
});
}
else if((email.indexOf('@')<=0)){swal({
  title:"Alert!!",
  text: "Invalid Email address",
  icon: "warning",
});
}
else if((email.indexOf('.')<=0)){swal({
  title:"Alert!!",
  text: "Invalid Email address",
  icon: "warning",
});
}
else if((email.length >=25)){swal({
  title:"Alert!!",
  text: "Email address must be less than 25 characters",
  icon: "warning",
});
}

  else{
  swal("Form successfully submitted",  names + ", we have received your message. Thank you for reaching out to us!", "success");
  }

});
});
  
 
  
  