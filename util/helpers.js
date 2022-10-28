'use strict';

const CONSTANTS = require('./constants.js');

const getPathType = (resource) => {
    const PATHS = CONSTANTS.PATHS;
    for (const pathType in PATHS) {
        if (PATHS[pathType].includes(resource))
            return pathType;
    }
};

module.exports = { getPathType };