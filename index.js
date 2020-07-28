const express = require("express");
const hbs = require("hbs");
const path = require("path");
const bodyParser = require("body-parser");
const Enmap = require("enmap");
const db = new Enmap({ name: "db" });
const { readdir, rename, writeFileSync, appendFile } = require("fs");
const app = express();

app.set("views", path.join(__dirname, "src/views"));
app.set("view engine", "hbs");
app.use("/foto", express.static("foto"));
app.use("/data", express.static("data"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.render("kartu-pelajar/index");
});

app.get("/form", (req, res) => {
  readdir("./foto", (err, result) => {
    if (err) throw err;
    res.render("form/index", { foto: result.filter(f => f.endsWith(".JPG")) });
  });
});

app.get("/login", (req, res) => {
  res.render("login/index", { kelas: db.indexes });
});

app.get("/classRegister", (req, res) => {
  res.render("class/registration");
});

app.post("/login", (req, res) => {
  const { username, password } = req.body;
  console.log(req.body);
});

app.post("/classRegister", (req, res) => {
  const { kelas, jumlah, password } = req.body;
  db.set(kelas, { jumlahSiswa: jumlah, token: password });
  console.log(db);
});

app.post("/ganti", (req, res) => {
  // prettier-ignore
  const { namaFile, namaSiswa, tempatLahir, tanggalLahir, bulanLahir, tahunLahir, alamatSiswa, nomorHPSiswa, lainLain } = req.body;
  // prettier-ignore
  rename(`./foto/${namaFile}`, `./foto/${namaSiswa}.JPG`, err => { if (err) throw err; });
  writeFileSync(`./foto/${namaSiswa}.TXT`, `${namaSiswa}\n${tempatLahir}, ${tanggalLahir} ${bulanLahir} ${tahunLahir}\n${alamatSiswa}\n${nomorHPSiswa}\n${lainLain}`, (err) => { if (err) throw err; });
  res.redirect("/form");
});

app.listen(3000, "192.168.0.105", () => console.log("192.168.0.105:3000"));
