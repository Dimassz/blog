const express = require('express');
const app = express();
const port = process.env.PORT || 8080; // penting: gunakan process.env.PORT

app.get('/', (req, res) => {
  res.send('Aplikasi ini dalam proses pengembangan');
});

app.listen(port, () => {
  console.log(`Server berjalan di port ${port}`);
});