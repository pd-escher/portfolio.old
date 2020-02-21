const fs = require('fs')
const path = require('path')

var express = require('express');
var app = express();



function folderpath() {
    return process.argv.length > 2 ? process.argv[2] : './APK/hello'
}

const child_process = require('child_process');

// UI
app.get('/', function (req, res) {
    res.send('Hello World!');
});

// APKs
app.get("/apk/", (req, res) => {

    const APK = './APK'
    const folder = 'hello'

    // we want to use a sync exec to prevent returning response
    // before the end of the compression process
    child_process.execSync(`zip -r archive *`, {
        cwd: folderpath()
    });

    // zip archive of your folder is ready to download
    res.download(folderpath() + `/archive.zip`);
});

// Listen
const port = process.argv.length > 3 ? process.argv[3] : 8080
app.listen(port);
console.log('Listening on localhost:' + port);

