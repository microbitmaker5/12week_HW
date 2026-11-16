var express = require('express');
var app = express();
var booksRouter = require('./books.js');
var PORT = process.env.PORT || 3000;

app.use(express.json());

// 기본 접속 확인용 페이지
app.get('/', function(req, res) {
  res.send('도서관리 API 서버가 정상 작동 중입니다! 주소 뒤에 /books 를 붙여보세요.');
});

// 도서관리 라우터 연결
app.use('/books', booksRouter);

app.listen(PORT, function() {
  console.log(PORT + '포트로 웹서버 실행!');
});
