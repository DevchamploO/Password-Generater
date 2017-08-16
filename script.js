var charArr = 'AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz0123456789'.split('');
var password;

function getPassword(){
  password = '';
for(var i=0; i<8; i++){
  var letter = charArr[Math.round(Math.random() * (charArr.length - 1))];
  password += letter;
}
  document.getElementById("box").innerHTML = password;
}