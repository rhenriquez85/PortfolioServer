//
const getMediaQueries = (sheetName) => {
    const styleSheets = document.styleSheets;
    const regEx = new RegExp(`${sheetName}$`);
    for (const sheet in styleSheets) {
         if (styleSheets[sheet].href && styleSheets[sheet].href.search(regEx) !== -1) {
            const cssRules = styleSheets[sheet].cssRules;
            return cssRules[cssRules.length - 1].conditionText.split(', ');
        }
    }
};
