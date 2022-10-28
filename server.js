'use strict';

const http = require('http');
const fs = require('fs');
const { RESOURCES, PATHS } = require('./util/constants.js');
const { getPathType } = require('./util/helpers.js');

const listener = (req, res) => {
    console.log('listener');
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

// REQUEST: PUBLIC FOLDER >> STYLES, IMAGES
server.on('request', (req, res) => {
    const url = req.url;
    const pathType = getPathType(url);
    if (!pathType || pathType === 'HOME') return

    const resource = url.substring(1, url.indexOf('.')).toUpperCase();
    fs.readFile(RESOURCES.PUBLIC[pathType][resource], (err, data) => {
        if (err) throw err;

        const resData = pathType === 'IMAGES' ? data : data.toString();
        res.write(resData);
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
