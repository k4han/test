const express = require('express');
const app = express();
const port = process.env.PORT || 3000; // Thay đổi port mặc định từ 8080 sang 3000 hoặc sử dụng biến môi trường

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});