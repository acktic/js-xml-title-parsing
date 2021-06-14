var xmlTitleParsing = function (xhr) {
  if (xhr.getElementsByTagName(`title`)[0].childNodes[1])
    var title = xhr.getElementsByTagName(`title`)[0].childNodes[1].nodeValue;
  else var title = xhr.getElementsByTagName(`title`)[0].childNodes[0].nodeValue;
  if ( // <[CDATA Title]> fix
    !title ||
    (title.length == 7 && xhr.getElementsByTagName(`title`)[0].childNodes[0])
  )
    var title = xhr.getElementsByTagName(`title`)[0].childNodes[0].nodeValue;

  return title.replace(/<.>/g, ``);
};
