// Day 01
// Activity 01


// wait for the DOM to finish loading (document.ready)

$(document).ready(function(){

  // Create a click listener for the submit button

  $(document).on("click", "#submit", function(event) {

    event.preventDefault();
    var firstName = $("#firstname").val().trim();
    var lastName = $("#lastname").val().trim();
    var occupation = $("#occupation").val().trim();
    var city = $("#city").val().trim();
    var state = $("#state").val().trim();

    $("#form").empty();

    var newarea = $(".displayarea").append("<div>");

    newarea.append(firstName + "," + lastName + "," + occupation + "," + city + "," + state);



  })


    // stop the default behavior of the submit button

    // pull the values off the user input form and store them in seperate variables

    // clear the form after we're done storing the values

    // generate the divs needed to display the user data and put the values 
    // we stored from the form inside the divs



    // empty the display area and display the divs we just created in the display area

})
