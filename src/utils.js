export const toPlainText = (text) => {
    if (text === undefined || text === null) {
        return '';
    }
    return text.toString()
        .replace(/&nbsp;|&lt;|&gt;|&amp;|&quot;|&apos;|&cent;|&pound;|&yen;|&euro;|&sect;|&copy;|&reg;|&trade;|&times;|&divide;/g, function (matches) {
            return ({
                '&nbsp;': ' ',
                '&lt;': '<',
                '&gt;': '>',
                '&amp;': '&',
                '&quot;': '"',
                '&apos;': '\'',
                '&cent;': '￠',
                '&pound;': '￡',
                '&yen;': '￥',
                '&euro;': '€',
                '&sect;': '§',
                '&copy;': '©',
                '&trade;': '®',
                '&times;': '×',
                '&divide;': '÷',
            })[matches];
        });
};