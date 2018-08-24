// ======== You are given NOTHING to start with 😱 ========

var fs = require ("fs");
var answer = "";


fs.readFile("quotes.txt", "utf8", function(error, data) {
    console.log(data);
    var dataArr = data.split(";");
    console.log(dataArr);

    if (error) {
        return console.log(error);
    }

    else {
        
        for (i=0; i<dataArr.length; i++) {
            console.log (process.argv[2]);
            var index = dataArr[i].indexOf(process.argv[2]);

            if (index>=0) {
                answer = dataArr[i].substr(0,index-1);
            }

        }
        console.log(answer);
    }


});

