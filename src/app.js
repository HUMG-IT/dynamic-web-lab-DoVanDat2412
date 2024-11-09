const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));

// Import routes
const apiRoutes = require('./routes/api');
app.use('/api/v1', apiRoutes);

// code 
app.post('/api/v1/bmi',(req , res) => {
  const{height , weight } = req.body ; 
  // chuyển chiều cao tu cm thành m 
  const heightInMeters = height / 100  ; 
  //tinh BMI
  const bmi = weight / (heightInMeters ** 2) ; 
  // Phân loại BMI
  let classification = '' ; 
  if (bmi < 18.5){
    classification = 'Gầy' ; 
  }else if (bmi >= 18.5 && bmi <= 24.9 ){
    classification = 'Bình thường' ; 
  }else if (bmi >= 25 && bmi <= 29.9 ){
    classification = 'Thừa cân' ; 
  }else {
    classification = 'Béo phì' ; 
  }
  // trả về kết quả BMI và phân loại 
  res.json({
    bmi: bmi.toFixed(2), // làm tròn BMI với 2 số thập phân 
    classification: classification
  })
})
app.listen(port, () => {
  console.log(`Server đang chạy ở cổng ${port}`);
  console.log(`Truy cập vào http://localhost:${port} để xem ứng dụng`);
});
