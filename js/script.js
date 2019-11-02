// Filter images through search bar

$(document).ready(function(){
    $("#myInput").on("keyup", function() {
      var value = $(this).val().toLowerCase();
      $("#myList a").filter(function() {
        $(this).toggle($(this).attr('data-title').toLowerCase().indexOf(value) > -1)
      });
    });
  });

