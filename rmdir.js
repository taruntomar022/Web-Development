var os = require("os");
var fs = require("fs");

var folderName = process.argv[2];

for (var i = 1; i <= 10; i++) {
    if (folderName + i == undefined) {
        console.log("enter name");
        return;
    }
    if (fs.existsSync(folderName + i) == false) {
        // console.log(folderName + "already exist");
        continue;
    }
    // fs.mkdirSync(folderName + i);
    // console.log("Folder" + folderName + i + " has been created");

    fs.rmdirSync(folderName + i);
    console.log("Folder" + folderName + i + " has been deleted");


}