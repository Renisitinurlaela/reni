const express = require("express");
const app = express();
const port = 3000;

// Set EJS as template engine
app.set("view engine", "ejs");
app.use(express.static("public"));

// Sample data
const students = [
  { no: 1, nim: "220101", nama: "Budi Santoso", gender: "Laki-laki", prodi: "Teknik Informatika", kelas: "TI-1A", semester: 4, alamat: "Jakarta", hobby: "Bermain Musik", cita_cita: "Software Engineer" },
  { no: 2, nim: "220102", nama: "Siti Aisyah", gender: "Perempuan", prodi: "Sistem Informasi", kelas: "SI-1B", semester: 2, alamat: "Bandung", hobby: "Membaca", cita_cita: "Data Analyst" },
  { no: 3, nim: "220103", nama: "Joko Widodo", gender: "Laki-laki", prodi: "Manajemen", kelas: "M-1C", semester: 6, alamat: "Surabaya", hobby: "Olahraga", cita_cita: "Pengusaha" },
];

app.get("/", (req, res) => {
  res.render("index", { students });
});

app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
