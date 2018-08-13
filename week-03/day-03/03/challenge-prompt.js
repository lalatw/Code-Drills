$(document).submit(function () {
    // dont forget to prevent default
    event.preventDefault();
    // grab the show information from the form on the page
    var searchInformation;


    // console.log the input


    // this is the api we are using add your search variable to end of the queryURL
    var queryURL = "http://api.tvmaze.com/search/shows?q=";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        // console.log the response 
        console.log (respone);

        // create a forloop and append the first 3 responses to the page

        for (var i=0; i<3; i++)
            // console.log the image and then append it to the page.            
            

            // console.log the name of the show and append it to the page


            // console.log the genres of the show and append it to the page


            // console.log the summary of the show and append it to the page


    });

})
