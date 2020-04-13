$(document).ready(function() {


    //Submit form when click on buttons
       $("#myButton").click(function() {
           $("#myForm").submit();
       });




   $(document).mousedown(function(e){
    var container = $("#settingsOptions");
    // if the target of the click isn't the container nor a descendant of the container
    if (!container.is(e.target) && container.has(e.target).length === 0)
    {
        container.hide();
    }

    //SettingOptions toggle
    $("#settings").click(function(){
      $("#settingsOptions").toggle();

    });

  });




  $(document).mousedown(function(e){
   var container = $("#hideMe");
   // if the target of the click isn't the container nor a descendant of the container
   if (!container.is(e.target) && container.has(e.target).length === 0)
   {
       container.hide();
   }

   //Applications list toggle
    $("#applicationsDiv").click(function(){
      $("#hideMe").toggle();

    });

  });

  //Manage Account button box-shadowing on click
  $("#signInButton").mousedown(function(e){
      $("#signInButton").css("box-shadow","3px 3px 4px #aaa");

  });


  $(document).mousedown(function(e){
   var container = $("#accountList");
   // if the target of the click isn't the container nor a descendant of the container
   if (!container.is(e.target) && container.has(e.target).length === 0)
   {
       container.hide();
   }

   //Applications list toggle
    $("#account").click(function(){
      $("#accountList").toggle();

    });

  });


});
