const Today = () => {
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0');
    let yyyy = today.getFullYear();
    let todays = yyyy + '-' + mm + '-' + dd;
    return todays;
}

const ucFirst = (str) => {
    str.toLowerCase();
    const words = str.split(" ");
    for (let i = 0; i < words.length; i++) {
        if (i === 0) {
            words[i] = words[i][0].toUpperCase() + words[i].substr(1);
        }
    }
    return words.join(" ");
}

const ucCaps = (str) => {
    const words = str.split(" ");
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i].toUpperCase();
    }
    return words.join(" ")
}

const ucWords = (str) => {
    str.toLowerCase();
    const words = str.split(" ");
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i] && words[i].toLowerCase();
        words[i] = words[i][0] && words[i][0].toUpperCase() + words[i].substr(1);
    }
    return words.join(" ");
}

const greeting = () => {
    let today = new Date(); let time = String(today.getHours()).padStart(2, '0');
    if (time <= 12) {
        return "morning";
    } else if (time > 12 && time <= 16) {
        return "afternoon";
    } else if (time > 16 && time <= 20) {
        return "evening";
    } else if (time > 20) { return "evening"; }
}

const substrwords = (text, maxchar, end = '...') => {
    if (text.length > maxchar || text === '') {
        return text.substring(0, parseInt(maxchar)) + "...";
    }
    else {
        return text.substring(0, parseInt(maxchar));
    }
}

const getColorCode = () => {
    var makeColorCode = '0123456789ABCDEF';
    var code = '#';
    for (var count = 0; count < 6; count++) {
        code = code + makeColorCode[Math.floor(Math.random() * 16)];
    }
    return code;
}

export { Today, greeting, ucFirst, ucWords, ucCaps, substrwords, getColorCode };