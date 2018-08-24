// ======== You are given NOTHING to start with 😱 ========

var fs = require ("fs");
var search = process.argv[2];
var dataArr = data.split(";");

fs.readFile("quotes.txt", "utf8", function(error, data) {
    if (error) {
        return console.log(error);
    }

    else {
        console.log(dataArr);
    }


});


var obj=[];
for (i=2; i<data.length; i++) {
    
}