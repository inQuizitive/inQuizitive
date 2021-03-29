const Replacer = (string) => {
  const apostrophe = /&#039;/g;
  const apostrophe1 = /&#O39/g;
  const quote = /&quot;/g;
  const quote1 = /&QUOT;/g;
  const quote2 = /&qu0t;/g;
  const quote3 = /&ldquo;/g;
  const quote4 = /&rdquo;/g;
  const e = /&ecirc;/g;
  const dash = /&ndash;/g;
  const e1 = /&eacute;/g;
  const o = /&ocirc;/g;
  const u = /&uuml;/g;
  const u1 = /&Uuml;/g;

  let s = string.replace(apostrophe, "'");
  s = s.replace(apostrophe1, "'");
  s = s.replace(quote, '"');
  s = s.replace(quote1, '"');
  s = s.replace(quote2, '"');
  s = s.replace(quote3, '"');
  s = s.replace(quote4, '"');
  s = s.replace(e, "ê");
  s = s.replace(dash, "-");
  s = s.replace(e1, "é");
  s = s.replace(o, "ô");
  s = s.replace(u, "ü");
  s = s.replace(u1, "Ü");

  return s;
};

module.exports = Replacer;
