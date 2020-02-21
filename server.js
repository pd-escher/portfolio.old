const fs = require('fs');
const path = require('path');
const cors = require('cors');

var express = require('express');
const app = express();
app.use(cors());

// deployed to heroku

function folderpath() {
    return process.argv.length > 2 ? process.argv[2] : './APK/hello'
}

const child_process = require('child_process');

// UI
app.get('/', function (req, res) {
    res.status(200).send('Hello World!');
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

app.listen(process.env.PORT || 8080);
console.log('Listening on port' + process.env.PORT || 8080);
