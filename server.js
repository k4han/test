
const express = require('express');
const app = express();
// Cho phép cấu hình cổng qua biến môi trường PORT, mặc định là 3000 nếu không được đặt
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server đang chạy trên cổng ${port}`);
});
