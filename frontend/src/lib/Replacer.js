const Replacer = (string) => {
    const apostrophe = /&#039;/g;
    const quote = /&quot;/g;
    let s = string.replace(apostrophe, "'");
    s = s.replace(quote, "\"");
    return s;
}

module.exports = Replacer