var express = require('express');
var app = express();

// 웹 서버를 생성합니다.
var app = express();
app.use(express.static('public'));

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});