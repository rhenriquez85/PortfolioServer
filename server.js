'use strict';

const http = require('http');
const fs = require('fs');
const firebase = require('./storage/firebase.js');
const { RESOURCES, PATHS } = require('./util/constants.js');
const { getPathType } = require('./util/helpers.js');

const listener = (req, res) => {
    console.log('listener', req.url);
};

const server = http.createServer(listener);

// REQUEST: PUBLIC FOLDER >> HOME
server.on('request', (req, res) => {
    const url = req.url;
    if (!PATHS.HOME.includes(url)) return;

    fs.readFile(RESOURCES.PUBLIC.PAGES.HOME, (err, data) => {
        if (err) throw err;

        res.write(data.toString());
        res.end();
    });
});

// REQUEST: PUBLIC FOLDER >> IMAGES, SCRIPTS, STYLES
server.on('request', (req, res) => {
    const url = req.url;
    const pathType = getPathType(url);
    if (!(pathType === 'IMAGES' || pathType === 'SCRIPTS' || pathType === 'STYLES')) return;

    const resource = url.substring(1, url.indexOf('.')).toUpperCase().replace('-', '_');
    fs.readFile(RESOURCES.PUBLIC[pathType][resource], (err, data) => {
        if (err) throw err;

        const resData = pathType === 'IMAGES' ? data : data.toString();
        if (pathType === 'SCRIPTS')
            res.writeHead(200, { "Content-Type": "text/javascript" });
        res.write(resData);
        res.end();
    });
});

// REQUEST: STORAGE
server.on('request', (req, res) => {
    const url = req.url;
    const pathType = getPathType(url);
    if(pathType !== 'STORAGE') return;

    firebase.getData((data) => {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.write(JSON.stringify(data));
        res.end();
    });
});

// REQUEST: BAD REQUEST
server.on('request', (req, res) => {
    const url = req.url;
    for (const paths in PATHS) {
        const curPaths = PATHS[paths];
        if (url === curPaths) return;
        if (Array.isArray(curPaths) && curPaths.includes(url)) return;
    }
    res.end();
});

// SERVER LISTEN
server.listen(80, () => {
	console.log('RUNNING');
});