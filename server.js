const fs = require('fs');
const path = require('path');
const cors = require('cors');
const request = require('request');
const helmet = require('helmet');
const bodyParser = require('body-parser');

var express = require('express');
const app = express();

//Allow all domains to request
//TODO: Change after buying domain name
app.use(cors());

//securing HTTP Headers, basic security
app.use(helmet()); 

//TODO: Security : Express rate limiter as per no of users.

// serve homepage and other static files in 'public folder'
app.use(express.static(path.join(__dirname, 'client/build')));

//parsing JSON requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

function folderpath(appname) {
    return process.argv.length > 2 ? process.argv[2] : './APK/'+appname
}

const child_process = require('child_process');

// UI
app.get('/', function (req, res) {
    res.status(200).sendFile(path.join(__dirname + "/client/build/index.html"));
});

app.get(/^\/(?!apk).*/, function (req, res) {
    res.status(200).sendFile(path.join(__dirname + "/client/build/index.html"));
});

// APKs
app.get("/apk/:appname", (req, res) => {
    var appname = req.params.appname
    var appPath = folderpath(req.params.appname)

    // we want to use a sync exec to prevent returning response
    // before the end of the compression process

    try {
        child_process.execSync(`zip -r ${appname} *`, {
            cwd: appPath
        });
        
        var zipName = appPath.toString() + `/${appname}.zip`
        // zip archive of your folder is ready to download
        res.status(200).download(zipName);
    } catch(e) {
        res.send(`Resource Not Found: ${appname}`)
    }
});

// Listen
app.listen(process.env.PORT || 8080);
console.log('Listening on port' + 8080 || process.env.PORT);
