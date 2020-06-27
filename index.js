module.exports.binary = binary =>
{
input = binary;
var output;
//const b2t = require('b2tconverter')
for (i = 0; i < input.length; i++) {
    var e = input[i].charCodeAt(0);
    var s = "";
    do {
      var a = e % 2;
      e = (e - a) / 2;
      s = a + s;
    } while (e != 0);
    while (s.length < 8) {
      s = "0" + s;
      }
      console.log(s)
}
}

module.exports.text = text =>
{
  var bintext, binlength, textresult;
    aaa = text;
    bintext = aaa.replace(/[^01]/g, "");
  binlength = bintext.length-(bintext.length%8);
  for(var z=0; z<binlength; z=z+8) {
    textresult += String.fromCharCode(parseInt(bintext.substr(z,8),2));
        console.log(textresult);
  }

}
